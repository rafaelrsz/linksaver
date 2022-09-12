import { ILink, Link } from "../../../app/schemas/Link";
import {
  ICreateLinkDTO,
  ILinksRepository,
  IUpdateLinkDTO,
} from "../ILinksRepository";

class LinksRepositoryInMemory implements ILinksRepository {
  links: ILink[] = [];

  async create({ title, url, site }: ICreateLinkDTO): Promise<ILink> {
    const link = new Link({
      title,
      url,
      site,
    });

    this.links.push(link);

    return link;
  }

  async findByUrl(url: string): Promise<ILink> {
    return this.links.find((link) => link.url === url);
  }

  async findById(id: string): Promise<ILink> {
    return this.links.find((link) => link.id === id);
  }

  async update({ id, site, title, url }: IUpdateLinkDTO): Promise<void> {
    const findIndex = this.links.findIndex((link) => link.id === id);

    if (site) {
      this.links[findIndex].site = site;
    }
    if (title) {
      this.links[findIndex].title = title;
    }
    if (url) {
      this.links[findIndex].url = url;
    }
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.links.findIndex((link) => link.id === id);

    this.links.splice(findIndex, 1);
  }
}

export { LinksRepositoryInMemory };
