import "reflect-metadata";
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

import { LinksRepositoryInMemory } from "../../../database/repositories/in-memory/LinksRepositoryInMemory";
import { AppError } from "../../../shared/errors/AppError";
import { CreateLinkUseCase } from "./CreateLinkUseCase";

let linkRepositoryInMemory: LinksRepositoryInMemory;
let createLinkUseCase: CreateLinkUseCase;

describe("Create Link", () => {
  beforeEach(() => {
    linkRepositoryInMemory = new LinksRepositoryInMemory();
    createLinkUseCase = new CreateLinkUseCase(linkRepositoryInMemory);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("should be able to create a link", async () => {
    const link = await createLinkUseCase.execute({
      title: "title-example",
      url: "url-example",
      site: "site-example",
    });

    expect(link).toHaveProperty("_id");
  });

  it("should not be able to create a link with same url", async () => {
    expect(async () => {
      await createLinkUseCase.execute({
        title: "title-example",
        url: "url-example",
        site: "site-example",
      });
      await createLinkUseCase.execute({
        title: "title-example",
        url: "url-example",
        site: "site-example",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
