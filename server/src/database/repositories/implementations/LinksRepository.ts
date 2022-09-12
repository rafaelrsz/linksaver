import { ILink, Link } from "../../../app/schemas/Link";
import {
  ICreateLinkDTO,
  ILinksRepository,
  IUpdateLinkDTO,
} from "../ILinksRepository";

class LinksRepository implements ILinksRepository {
  async create({ title, url, site }: ICreateLinkDTO): Promise<ILink> {
    const link = await Link.create({ title, url, site });

    return link;
  }

  async findByUrl(url: string): Promise<ILink> {
    const link = await Link.findOne({ url });

    return link;
  }

  async findById(id: string): Promise<ILink> {
    const link = await Link.findById(id);

    return link;
  }

  async update({ id, site, title, url }: IUpdateLinkDTO): Promise<void> {
    if (site) {
      await Link.findByIdAndUpdate(id, { site });
    }
    if (title) {
      await Link.findByIdAndUpdate(id, { title });
    }
    if (url) {
      await Link.findByIdAndUpdate(id, { url });
    }
  }

  async delete(id: string): Promise<void> {
    await Link.findOneAndDelete({ _id: id });
  }

  async listAllLinks(): Promise<ILink[]> {
    const links = Link.find();

    return links;
  }
}

export { LinksRepository };
