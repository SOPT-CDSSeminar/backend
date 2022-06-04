import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import config from "./config";
import swaggerSpecs from "./config/configSwagger";
import configMongoose from "./loaders/configMongoose";
import router from "./routes";

const app = express();

configMongoose(); //connectDB

app.set("port", process.env.PORT || 3000);

//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(router) //라우터 연결 안되어있었음
interface ErrorType {
  message: string;
  statusCode: number;
}

app.use((err: ErrorType, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.statusCode || 500);
  res.render("error");
});

app
  .listen(config.port || 3000, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

export default app;
