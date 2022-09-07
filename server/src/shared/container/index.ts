import { container } from "tsyringe";

import { ILinksRepository } from "../../database/repositories/ILinksRepository";
import { LinksRepository } from "../../database/repositories/implementations/LinksRepository";

container.registerSingleton<ILinksRepository>(
  "LinksRepository",
  LinksRepository
);
