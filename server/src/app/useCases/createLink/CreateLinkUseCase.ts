import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../../database/repositories/ILinksRepository";
import { AppError } from "../../../shared/errors/AppError";
import { ILink } from "../../schemas/Link";

interface IRequest {
  title: string;
  url: string;
  site: string;
}

@injectable()
class CreateLinkUseCase {
  constructor(
    @inject("LinksRepository")
    private linksRepository: ILinksRepository
  ) {}

  async execute({ title, url, site }: IRequest): Promise<ILink> {
    const linkAlredyExists = await this.linksRepository.findByUrl(url);

    if (linkAlredyExists) {
      throw new AppError("This link alredy exists", 409);
    }

    const link = await this.linksRepository.create({ title, url, site });

    return link;
  }
}

export { CreateLinkUseCase };
