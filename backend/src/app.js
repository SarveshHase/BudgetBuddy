import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(
    cors({
        origin: [
            process.env.CORS_ORIGIN,
            "http://localhost:5173",
        ],
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


import userRouter from "./routes/user.route.js"
import transactionRouter from "./routes/transaction.route.js"
import goalRouter from "./routes/goal.route.js"
import feedbackRouter from "./routes/feedback.route.js"
import payRouter from "./routes/payment.route.js";
import statsRouter from "./routes/stats.route.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/goals", goalRouter);
app.use("/api/v1/feedback", feedbackRouter);
app.use("/api/v1/stats", statsRouter);
app.use("/api/v1/pay", payRouter);

export default app;