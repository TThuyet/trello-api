/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
/* eslint no-console: "error" */
import express from "express";
import { mapOrder } from "~/utils/sorts.js";
import { CONNECT_DB, GET_DB } from "~/config/mongodb";

const START_SERVER = () => {
  const app = express();
  const hostname = "localhost";
  const port = 8017;

  app.get("/", (req, res) => {
    // Test Absolute import mapOrder
    console.log(
      mapOrder(
        [
          { id: "id-1", name: "One" },
          { id: "id-2", name: "Two" },
          { id: "id-3", name: "Three" },
          { id: "id-4", name: "Four" },
          { id: "id-5", name: "Five" },
        ],
        ["id-5", "id-4", "id-2", "id-3", "id-1"],
        "id"
      )
    );
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Thuyetct, I am running at http://${hostname}:${port}/`);
  });
};

CONNECT_DB()
  .then(() => console.log("Connected to MongoDb Clould Atlat!"))
  .then(() => START_SERVER())
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
