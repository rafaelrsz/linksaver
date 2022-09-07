import { Router } from "express";

import { linkRoutes } from "./linkRoutes";

const router = Router();

router.use("/api", linkRoutes);

export { router };
