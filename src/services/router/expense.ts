import { Router } from "express";

import { authenticateUser} from "../middleware/authenticateUser";

import { adapterMiddleware } from "../../core/adapter/adapterMiddleware";
import { adapterRouter } from "../../core/adapter/adapterRouter";

import CreateUserController from "../../core/useCases/Expense/CreateExpense/Controller";
import UpdateExpenseController from "../../core/useCases/Expense/UpdateExpense/Controller";
import GetExpenseController from "../../core/useCases/Expense/GetExpense/Controller";
import DeleteExpenseController from "../../core/useCases/Expense/DeleteExpense/Controller";

const router = Router();

router.post("/expenses", adapterMiddleware(authenticateUser), adapterRouter(CreateUserController.handle));
router.put("/expenses/update/:id", adapterMiddleware(authenticateUser), adapterRouter(UpdateExpenseController.handle));
router.get("/expenses", adapterMiddleware(authenticateUser), adapterRouter(GetExpenseController.handle));
router.delete("/expenses/delete/:id", adapterMiddleware(authenticateUser), adapterRouter(DeleteExpenseController.handle));

export default router;