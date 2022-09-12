import "reflect-metadata";
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose";

import { LinksRepositoryInMemory } from "../../../database/repositories/in-memory/LinksRepositoryInMemory";
import { AppError } from "../../../shared/errors/AppError";
import { CreateLinkUseCase } from "../createLink/CreateLinkUseCase";
import { DeleteLinkUseCase } from "./DeleteLinkUseCase";

let createLinkUseCase: CreateLinkUseCase;
let linkRepositoryInMemory: LinksRepositoryInMemory;
let deleteLinkUseCase: DeleteLinkUseCase;

describe("Update Link", () => {
  beforeEach(() => {
    linkRepositoryInMemory = new LinksRepositoryInMemory();
    createLinkUseCase = new CreateLinkUseCase(linkRepositoryInMemory);
    deleteLinkUseCase = new DeleteLinkUseCase(linkRepositoryInMemory);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("should be able to delete a link", async () => {
    const { id } = await createLinkUseCase.execute({
      title: "title-example",
      url: "url-example",
      site: "site-example",
    });

    await deleteLinkUseCase.execute({
      id,
    });

    expect(await linkRepositoryInMemory.findById(id)).toBe(undefined);
  });

  it("should not be able to delete a link that does not exists", async () => {
    expect(async () => {
      await deleteLinkUseCase.execute({
        id: "id3232",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
