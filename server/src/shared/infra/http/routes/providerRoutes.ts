import { Router } from "express";

import { CangaceiroJSController } from "../../../../app/useCases/getArticles/CangaceiroJS";
import { DevGoArticlesController } from "../../../../app/useCases/getArticles/DevGoArticles";
import { HumbertoRochaArticlesController } from "../../../../app/useCases/getArticles/HumbertoRochaArticles";
import { ListProvidersController } from "../../../../app/useCases/listProviders/ListProvidersController";

const listProvidersController = new ListProvidersController();
const devGoArticlesController = new DevGoArticlesController();
const humbertoRochaArticlesController = new HumbertoRochaArticlesController();
const cangaceiroJSController = new CangaceiroJSController();

const providerRoutes = Router();

providerRoutes.get("/", listProvidersController.handle);
providerRoutes.get("/devgo", devGoArticlesController.handle);
providerRoutes.get("/hr", humbertoRochaArticlesController.handle);
providerRoutes.get("/cangaceiro", cangaceiroJSController.handle);

export { providerRoutes };
