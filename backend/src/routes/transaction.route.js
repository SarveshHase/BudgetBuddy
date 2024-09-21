import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"
import { createExpense, createIncome, deleteTransaction, getTransaction, getTransactions, recentTransactions } from "../controllers/transaction.controller.js";

const router = Router();

router.route("/create-expense").post(verifyJWT, upload.single("receipt"), createExpense);
router.route("/create-income").post(verifyJWT, upload.single("receipt"), createIncome);

router.route("/get-transactions").post(verifyJWT, getTransactions);
router.route("/get-transaction").post(verifyJWT, getTransaction);
router.route("/delete-transaction").post(verifyJWT, deleteTransaction);
router.route("/recent-transactions").post(verifyJWT, recentTransactions);

export default router;
