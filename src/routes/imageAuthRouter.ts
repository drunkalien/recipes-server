import { Router } from "express";

import { getImageAuth } from "../controllers/imageKitAuth";

const router = Router();

router.route("/").get(getImageAuth);

export default router;
