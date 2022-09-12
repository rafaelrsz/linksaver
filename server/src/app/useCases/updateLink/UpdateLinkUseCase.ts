import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../../database/repositories/ILinksRepository";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
  title?: string;
  url?: string;
  site?: string;
  id: string;
}

@injectable()
class UpdateLinkUseCase {
  constructor(
    @inject("LinksRepository")
    private linksRepository: ILinksRepository
  ) {}

  async execute({ id, site, title, url }: IRequest): Promise<void> {
    const linkExists = await this.linksRepository.findById(id);

    if (!linkExists) {
      throw new AppError("Link not found", 404);
    }

    await this.linksRepository.update({ id, site, title, url });
  }
}

export { UpdateLinkUseCase };
