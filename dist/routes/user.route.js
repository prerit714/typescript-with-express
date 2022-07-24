"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUserToDatabase = void 0;
const db_data_1 = require("../db-data");
function addNewUserToDatabase(req, res) {
    const inputUser = req.body;
    const inputUserKeys = Object.keys(inputUser);
    const truthyArray = [
        inputUserKeys.includes("username"),
        inputUserKeys.includes("password"),
        inputUserKeys.includes("role"),
    ];
    if (truthyArray.every((value) => value === true)) {
        if (!["seller", "buyer"].includes(inputUser.role)) {
            res.status(401).json({
                data: {},
                error: [`Invalid role given!`],
            });
        }
        else {
            // Add the new user to the database
            const { username, password, role } = inputUser;
            let isUsernameAlreadyExisting = false;
            for (let i = 0; i < db_data_1.USERS.length; ++i) {
                const user = db_data_1.USERS[i];
                if (user.username === username) {
                    isUsernameAlreadyExisting = true;
                    break;
                }
            }
            if (!isUsernameAlreadyExisting) {
                console.log(`[addNewUserToDatabse()] New user is added to database`);
                db_data_1.USERS.push({ username, password, role });
                res.status(200).json({
                    data: {
                        userAdded: { username, password, role },
                    },
                    errors: null,
                });
            }
            else {
                res.status(401).json({
                    data: null,
                    errors: [`Username ${username} is already taken!`],
                });
            }
        }
    }
    else {
        res.status(401).json({
            data: null,
            error: [`Invalid user body format!`],
        });
    }
}
exports.addNewUserToDatabase = addNewUserToDatabase;
