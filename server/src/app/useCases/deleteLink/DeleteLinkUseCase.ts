import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../../database/repositories/ILinksRepository";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DeleteLinkUseCase {
  constructor(
    @inject("LinksRepository")
    private linksRepository: ILinksRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const linkExists = await this.linksRepository.findById(id);

    if (!linkExists) {
      throw new AppError("Link not found", 404);
    }

    await this.linksRepository.delete(id);
  }
}

export { DeleteLinkUseCase };
