import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import ApiError from "~/utils/ApiError";
import { BOARD_TYPES } from "~/utils/constants";

const createNew = async (req, res, next) => {
  // validate by joi
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(255).required().trim().strict().messages({
      "any.required": "Title is required ",
      "string.empty": "Title cannot be empty ",
      "string.min": "Title must be at least 3 characters long ",
      "string.max": "Title must not exceed 5 characters ",
      "string.trim": "Title must not contain leading or trailing spaces ",
    }),
    description: Joi.string().min(3).max(255).required().trim().strict(),
    type: Joi.string()
      .valid(...Object.values(BOARD_TYPES))
      .required(),
  });

  try {
    console.log("req.body:", req.body);
    // abortEarly: false sẽ cho phép Joi trả về tất cả các lỗi thay vì dừng lại khi gặp lỗi đầu tiên
    // validateAsync sẽ trả về một Promise, nếu dữ liệu hợp lệ thì Promise sẽ được giải quyết,
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    // khi validate thành công, tiếp tục xử lý request -> controller
    next();
  } catch (error) {
    // console.log(error);
    // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //   error: new Error(error).message,
    // });
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    );
  }
};

// const findOneByIdBoard = async (req, res, next) => {
//   const correctCondition = Joi.object({
//     id: Joi.string()
//       .required()
//       .pattern(/^[0-9a-fA-F]{24}$/)
//       .message("Invalid board ID format"),
//   });
// }

export const boardValidation = {
  createNew,
};
