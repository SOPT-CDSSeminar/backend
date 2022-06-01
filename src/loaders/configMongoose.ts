import mongoose from "mongoose";
import config from "../config";

const configMongoose = async () => { //connectDB
  if (process.env.MODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  try {
    await mongoose.connect(config.mongoURI); //비동기 처리
    mongoose.set('autoCreate', true); //몽구스 옵션 변경 - 옵션은 홈페이지에서 여러개 확인하기
    console.log("Mongoose Connected ...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB Connection Error", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("MongoDB Disconnected. Try Connect");
  configMongoose();
});

export default configMongoose;