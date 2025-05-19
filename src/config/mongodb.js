/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

const MONGODB_URI =
  "mongodb+srv://thuyetct:YEkC2zUms9bjBC22@cluster0-tthuyet.lprea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-TThuyet";

const DATABASE_NAME = "trello-api";

import { MongoClient, ServerApiVersion } from "mongodb";

let trelloDbInstance = null;

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// kết nối với db
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  trelloDbInstance = mongoClientInstance.db(DATABASE_NAME);
};

export const GET_DB = () => {
  if (!trelloDbInstance) throw new Error("Must connect to Database first!");
  return trelloDbInstance;
};
