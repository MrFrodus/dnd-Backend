import express from "express";

import { playersController } from "../controller/players";
import apiErrorHandler from "../errorDnd/apiErrorHandler";

const playersRouter = express.Router();

playersRouter.get("/:id", playersController.getById);

playersRouter.use(apiErrorHandler);

export default playersRouter;
