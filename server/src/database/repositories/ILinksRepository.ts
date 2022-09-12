import { ILink } from "../../app/schemas/Link";

interface ICreateLinkDTO {
  title: string;
  url: string;
  site: string;
}

interface IUpdateLinkDTO {
  title?: string;
  url?: string;
  site?: string;
  id: string;
}

interface ILinksRepository {
  create({ title, url, site }: ICreateLinkDTO): Promise<ILink>;
  findByUrl(link: string): Promise<ILink>;
  findById(id: string): Promise<ILink>;
  update({ id, site, title, url }: IUpdateLinkDTO): Promise<void>;
  delete(id: string): Promise<void>;
  listAllLinks(): Promise<ILink[]>;
}

export { ICreateLinkDTO, ILinksRepository, IUpdateLinkDTO };
