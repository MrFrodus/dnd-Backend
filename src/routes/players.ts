import express from "express";

import { playersController } from "../controller/players";
import apiErrorHandler from "../errorDnd/apiErrorHandler";

const playersRouter = express.Router();

playersRouter.get("/:id", playersController.getById);

playersRouter.get("/", playersController.getAll);

playersRouter.post("/", playersController.add);

playersRouter.patch("/:id", playersController.update);

export default playersRouter;
