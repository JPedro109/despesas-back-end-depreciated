import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSON from "../../../swagger-docs";

import user from "./user";
import expense from "./expense";

export const router = Router();

router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

router.use(user);
router.use(expense);