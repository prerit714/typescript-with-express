import express, { Application } from "express";
import cors from "cors";
import { ping } from "./routes/ping.route";
import { PORT_NUMBER } from "./constants";
import { userLogin } from "./routes/auth.route";
import bodyParser from "body-parser";
import { internalServerErrorHandler } from "./routes/error.route";
import { addNewUserToDatabase, getAllUsers } from "./routes/user.route";
import { addProductToUserHavingUsername } from "./routes/product.route";
import { doTransaction } from "./routes/transaction.route";

const app: Application = express();

// App config
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Async Internal Server Error Handler
app.use(internalServerErrorHandler);

// Ping route
app.get("/", ping);

// Auth routes
app.post("/login", userLogin);

// User routes
app.post("/add-new-user", addNewUserToDatabase);
app.get("/get-all-users", getAllUsers);

// Product routes
app.post("/add-product", addProductToUserHavingUsername);

// Transaction routes
app.post("/do-transaction", doTransaction);

app.listen(PORT_NUMBER, () =>
  console.log(`[Express()] Running on ${PORT_NUMBER}`)
);
