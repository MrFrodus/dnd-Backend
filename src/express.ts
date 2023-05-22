import express from "express";
import playersRouter from "./routes/players";
import cors from "cors";
import apiErrorHandler from "./errorDnd/apiErrorHandler";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/players", playersRouter);

app.use(apiErrorHandler);

app.listen(3000, () => console.log("app listening on port 3000"));
