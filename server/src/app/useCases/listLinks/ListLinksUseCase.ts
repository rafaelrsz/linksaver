import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../../database/repositories/ILinksRepository";
import { ILink } from "../../schemas/Link";

@injectable()
class ListLinksUseCase {
  constructor(
    @inject("LinksRepository")
    private linksRepository: ILinksRepository
  ) {}

  async execute(): Promise<ILink[]> {
    const links = await this.linksRepository.listAllLinks();

    return links;
  }
}
export { ListLinksUseCase };
