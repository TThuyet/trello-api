import express from "express";
import StatusCode from "http-status-codes";
import { boardRoutes } from "./boardRoutes";
const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCode.OK).json({
    message: "API v1 is running ",
    code: StatusCode.OK,
  });
});

Router.use("/boards", boardRoutes);

export const APIs_V1 = Router;
