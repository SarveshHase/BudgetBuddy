import { Router } from "express";
import { registerUser, logoutUser, addIncomeAndExpense, refreshAcessToken, initialDeposit, updateAccountBalace, updateDate, updateUserDetails, uploadAvatar, changeCurrentPassword, updateCurrency, getCurrentUser, loginUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/add-income-and-expense").post(verifyJWT, addIncomeAndExpense);
router.route("/refresh-access-token").post(verifyJWT, refreshAcessToken);
router.route("/initial-deposit").post(verifyJWT, initialDeposit);
router.route("/update-account-balance").post(verifyJWT, updateAccountBalace);
router.route("/update-date").post(verifyJWT, updateDate);
router.route("/update-details").post(verifyJWT, updateUserDetails);
router.route("/upload-avatar").post(verifyJWT, upload.single("avatar"), uploadAvatar);
router.route("/update-password").post(verifyJWT, changeCurrentPassword);
router.route("/update-currency").post(verifyJWT, updateCurrency);
router.route("/get-current-user").post(verifyJWT, getCurrentUser);

export default router;