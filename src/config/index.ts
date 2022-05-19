import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

// if (envFound.error) {
//   throw new Error("Couldn't Find .env File!");
// }

export default {
  port: parseInt(process.env.PORT as string, 10) as number,
  mongoURI: process.env.MONGODB_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtAlgo: process.env.JWT_ALGO as string,
};
