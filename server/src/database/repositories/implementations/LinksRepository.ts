import { ILink, Link } from "../../../app/schemas/Link";
import { ICreateLinkDTO, ILinksRepository } from "../ILinksRepository";

class LinksRepository implements ILinksRepository {
  async create({ title, url, site }: ICreateLinkDTO): Promise<ILink> {
    const link = await Link.create({ title, url, site });

    return link;
  }

  async findByUrl(url: string): Promise<ILink> {
    const link = await Link.findOne({ url });

    return link;
  }
}

export { LinksRepository };
