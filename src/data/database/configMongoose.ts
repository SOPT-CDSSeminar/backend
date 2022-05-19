import mongoose from "mongoose";

const configMongoose = async () => {
  if (process.env.MODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  mongoose.connect(
    "",
    {
      // dbname: 'DBName'
      autoCreate: true,
    },
    (error) => {
      if (error) {
        console.log("MongoDB Init Error", error);
      } else {
        console.log("MonogDB Init Success!!");
      }
    }
  );

  // TODO Collection Create Logic
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB Connection Error", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("MongoDB Disconnected. Try Connect");
  configMongoose();
});

export default configMongoose;
