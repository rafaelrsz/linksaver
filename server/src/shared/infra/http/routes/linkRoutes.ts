import { Router } from "express";

import { CreateLinkController } from "../../../../app/useCases/createLink/CreateLinkController";
import { DeleteLinkController } from "../../../../app/useCases/deleteLink/DeleteLinkController";
import { ListLinksController } from "../../../../app/useCases/listLinks/ListLinksController";
import { UpdateLinkController } from "../../../../app/useCases/updateLink/UpdateLinkController";

const createLinkController = new CreateLinkController();

const updateLinkController = new UpdateLinkController();

const deleteLinkController = new DeleteLinkController();

const listLinksController = new ListLinksController();

const linkRoutes = Router();

linkRoutes.post("/", createLinkController.handle);

linkRoutes.patch("/update/:id", updateLinkController.handle);

linkRoutes.delete("/delete/:id", deleteLinkController.handle);

linkRoutes.get("/", listLinksController.handle);

export { linkRoutes };
