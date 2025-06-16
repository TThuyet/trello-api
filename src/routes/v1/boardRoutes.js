import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardValidation } from "~/validations/boardValidation";

const Router = express.Router();
Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: "GET : Board API is running",
      code: StatusCodes.OK,
    });
  })
  .post(boardValidation.createNew);

export const boardRoutes = Router;
