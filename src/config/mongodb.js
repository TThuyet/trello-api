/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */



import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "~/config/environment.js";

let trelloDbInstance = null;

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// kết nối với db
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  trelloDbInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

export const GET_DB = () => {
  if (!trelloDbInstance) throw new Error("Must connect to Database first!");
  return trelloDbInstance;
};
