import { Router } from "express";

import { linkRoutes } from "./linkRoutes";
import { providerRoutes } from "./providerRoutes";

const router = Router();

router.use("/api/links", linkRoutes);
router.use("/api/providers", providerRoutes);

export { router };
