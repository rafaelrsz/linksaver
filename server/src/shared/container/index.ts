import { container } from "tsyringe";

import { IArticlesRepository } from "../../database/repositories/IArticlesRepository";
import { ILinksRepository } from "../../database/repositories/ILinksRepository";
import { ArticlesRepository } from "../../database/repositories/implementations/ArticlesRepository";
import { LinksRepository } from "../../database/repositories/implementations/LinksRepository";
import { ProvidersRepository } from "../../database/repositories/implementations/ProvidersRepository";
import { IProvidersRepository } from "../../database/repositories/IProvidersRepository";

container.registerSingleton<ILinksRepository>(
  "LinksRepository",
  LinksRepository
);
container.registerSingleton<IProvidersRepository>(
  "ProvidersRepository",
  ProvidersRepository
);
container.registerSingleton<IArticlesRepository>(
  "ArticlesRepository",
  ArticlesRepository
);
