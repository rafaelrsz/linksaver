import { Router } from "express";

import { CreateLinkController } from "../../../../app/useCases/createLink/CreateLinkController";

const createLinkController = new CreateLinkController();

const linkRoutes = Router();

linkRoutes.post("/create", createLinkController.handle);

export { linkRoutes };
