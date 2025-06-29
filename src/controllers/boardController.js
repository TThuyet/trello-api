import StatusCodes from "http-status-codes";
import { boardService } from "~/services/boardService";

const createNewBoard = async (req, res, next) => {
  try {
    // điều hướng xử lý data sang service
    const createNewBoard = await boardService.createNew(req.body);
    res.status(StatusCodes.CREATED).json(createNewBoard);
    // throw new Error("This is a test error from createNewBoard controller");
  } catch (error) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   error: error.message,
    // });
    // bắt lỗi và chuyển tiếp đến middleware xử lý lỗi errorHandlingMiddleware
    next(error);
  }
};

export const boardController = {
  createNewBoard,
};
