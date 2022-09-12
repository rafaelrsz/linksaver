import "reflect-metadata";
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

import { LinksRepositoryInMemory } from "../../../database/repositories/in-memory/LinksRepositoryInMemory";
import { AppError } from "../../../shared/errors/AppError";
import { CreateLinkUseCase } from "../createLink/CreateLinkUseCase";
import { UpdateLinkUseCase } from "./UpdateLinkUseCase";

let createLinkUseCase: CreateLinkUseCase;
let linkRepositoryInMemory: LinksRepositoryInMemory;
let updateLinkUseCase: UpdateLinkUseCase;

describe("Update Link", () => {
  beforeEach(() => {
    linkRepositoryInMemory = new LinksRepositoryInMemory();
    createLinkUseCase = new CreateLinkUseCase(linkRepositoryInMemory);
    updateLinkUseCase = new UpdateLinkUseCase(linkRepositoryInMemory);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("should be able to update a link", async () => {
    const link = await createLinkUseCase.execute({
      title: "title-example",
      url: "url-example",
      site: "site-example",
    });

    await updateLinkUseCase.execute({
      id: link.id,
      title: "title-edited",
      url: "url-edited",
      site: "site-edited",
    });

    expect(link.title).toMatch("title-edited");
    expect(link.url).toMatch("url-edited");
    expect(link.site).toMatch("site-edited");
  });

  it("should not be able to update a link that does not exists", async () => {
    expect(async () => {
      await updateLinkUseCase.execute({
        id: "32324",
        title: "title-edited",
        url: "url-edited",
        site: "site-edited",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
