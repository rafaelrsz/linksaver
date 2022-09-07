import { ILink } from "../../app/schemas/Link";

interface ICreateLinkDTO {
  title: string;
  url: string;
  site: string;
}

interface ILinksRepository {
  create({ title, url, site }: ICreateLinkDTO): Promise<ILink>;
  findByUrl(link: string): Promise<ILink>;
}

export { ICreateLinkDTO, ILinksRepository };
