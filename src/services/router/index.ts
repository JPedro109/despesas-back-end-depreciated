import { Router } from "express";

import user from "./user";
import expense from "./expense";

export const router = Router();

router.use(user);
router.use(expense);