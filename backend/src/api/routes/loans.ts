import { Router } from "express";
import * as loanController from "@controllers/loans";
import * as loanMiddleware from "@middleware/loans";

const router = Router();

router.get(["/", "/:UUID"], loanMiddleware.Validate);
router.post("/", loanController.CreateOne());
router.patch("/return/item", loanController.ReturnLoan());

export default router;
