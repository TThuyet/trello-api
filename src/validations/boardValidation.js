import { StatusCodes } from "http-status-codes";
import Joi from "joi";

const createNew = async (req, res, next) => {
  // validate by joi
  const correctCondition = Joi.object({
    title: Joi.string().min(3).max(255).required().trim().strict(),
    description: Joi.string().min(3).max(255).required().trim().strict(),
  });

  try {
    console.log("req.body:", req.body);
    // abortEarly: false sẽ cho phép Joi trả về tất cả các lỗi thay vì dừng lại khi gặp lỗi đầu tiên
    // validateAsync sẽ trả về một Promise, nếu dữ liệu hợp lệ thì Promise sẽ được giải quyết,
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    res.status(StatusCodes.CREATED).json({
      message: "POST : Board API is running",
      code: StatusCodes.CREATED,
    });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(error).message,
    });
  }
};

export const boardValidation = {
  createNew,
};
