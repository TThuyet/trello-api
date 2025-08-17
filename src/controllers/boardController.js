import StatusCodes from "http-status-codes";
import { boardService } from "~/services/boardService";

const createNewBoardController = async (req, res, next) => {
  try {
    // điều hướng xử lý data sang service
    console.log("controller");
    const createNewBoardController = await boardService.createNewBoardService(req.body);
    res.status(StatusCodes.CREATED).json(createNewBoardController);
    // throw new Error("This is a test error from createNewBoard controller");
  } catch (error) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   error: error.message,
    // });
    // bắt lỗi và chuyển tiếp đến middleware xử lý lỗi errorHandlingMiddleware
    next(error);
  }
};

const getDetailBoardController = async (req, res, next) => {
  try {
    const findBoardService = await boardService.getDetailBoardService(req.params);
    res.status(StatusCodes.OK).json(findBoardService);
  } catch (error) {
    next(error);
  }
}

export const boardController = {
  createNewBoardController,
  getDetailBoardController
};
