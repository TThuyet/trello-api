/* eslint-disable no-useless-catch */
import { StatusCodes } from "http-status-codes";
import { ObjectId } from "mongodb";
import { boardModel } from "~/models/boardModel";
import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/formatters";

const createNewBoardService = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };

    const createBoardService = await boardModel.createNewBoardModel(newBoard);

    const findBoardService = await boardModel.findOneById(
      createBoardService.insertedId
    );
    return findBoardService;
  } catch (error) {
    throw error;
  }
};

const getDetailBoardService = async (reqParams) => {
  try {
    const { id: boardId } = reqParams;
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(
        StatusCodes.NOT_FOUND,
        `Board with ID ${boardId} not found`
      );
    }
    return board;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNewBoardService,
  getDetailBoardService,
};
