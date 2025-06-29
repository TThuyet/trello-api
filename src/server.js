// eslint-disable-next-line no-console
import express from "express";
import { mapOrder } from "~/utils/sorts.js";
import { CONNECT_DB, GET_DB } from "~/config/mongodb";
import { APIs_V1 } from "./routes/v1";
import { errorHandlingMiddleware } from "./middlewares/errorsHandlingMiddleware";
import { env } from "./config/environment";

const START_SERVER = () => {
  const app = express();
  // const hostname = "localhost";
  // const port = 8017;

  // là 1 middleware của express, nó sẽ parse dữ liệu từ body của request
  // và chuyển đổi nó thành JSON, giúp chúng ta dễ dàng truy cập dữ liệu trong req.body
  app.use(express.json());

  app.use("/v1", APIs_V1);

  // Middleware để xử lý lỗi tập trung errorHandling
  app.use(errorHandlingMiddleware);

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Thuyetct, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`);
  });
};

CONNECT_DB()
  .then(() => console.log("Connected to MongoDb Clould Atlat!"))
  .then(() => START_SERVER())
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
