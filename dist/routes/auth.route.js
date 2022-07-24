"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const db_data_1 = require("../db-data");
function userLogin(req, res) {
    const inputUser = req.body;
    const userKeys = Object.keys(inputUser);
    if (userKeys.length === 0) {
        res.status(401).json({
            data: {},
            errors: ["You have sent in an empty request body object with no keys"],
        });
    }
    else if (!userKeys.includes("username")) {
        res.status(401).json({
            data: {},
            errors: ["'username' key does not exist in request body object"],
        });
    }
    else if (!userKeys.includes("password")) {
        res.status(401).json({
            data: {},
            errors: ["'password' key does not exist in request body object"],
        });
    }
    else {
        let userFound = null;
        for (let i = 0; i < db_data_1.USERS.length; ++i) {
            const user = db_data_1.USERS[i];
            if (user.username === inputUser.username &&
                user.password === inputUser.password) {
                userFound = user;
                break;
            }
        }
        if (userFound !== null) {
            res.status(200).json({
                data: {
                    userFound,
                    message: "You are authenticated!",
                },
                errors: [],
            });
        }
        else {
            res.status(404).json({
                data: {},
                errors: [`Invalid Credentials :(`],
            });
        }
    }
}
exports.userLogin = userLogin;
