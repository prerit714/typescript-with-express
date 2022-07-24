"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ping_route_1 = require("./routes/ping.route");
const constants_1 = require("./constants");
const auth_route_1 = require("./routes/auth.route");
const body_parser_1 = __importDefault(require("body-parser"));
const error_route_1 = require("./routes/error.route");
const user_route_1 = require("./routes/user.route");
const app = (0, express_1.default)();
// App config
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
app.use(express_1.default.json());
// Async Internal Server Error Handler
app.use(error_route_1.internalServerErrorHandler);
// Ping route
app.get("/", ping_route_1.ping);
// Auth routes
app.post("/login", auth_route_1.userLogin);
// User routes
app.post("/add-new-user", user_route_1.addNewUserToDatabase);
app.listen(constants_1.PORT_NUMBER, () => console.log(`[Express()] Running on ${constants_1.PORT_NUMBER}`));
