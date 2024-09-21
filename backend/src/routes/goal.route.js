import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addMoneyToGoal, createGoal, deleteGoal, getGoals, updateGoal } from "../controllers/goal.controller.js";

const router = Router();

router.route("/create-goal").post(verifyJWT, createGoal);
router.route("/get-goals").post(verifyJWT, getGoals);
router.route("/update-goal").post(verifyJWT, updateGoal);
router.route("/add-money-to-goal").post(verifyJWT, addMoneyToGoal);
router.route("/delete-goal").post(verifyJWT, deleteGoal);

export default router;