"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    static register(req, res) {
        const { username, email, password } = req.body;
    }
    static login(req, res) {
        const { login, password } = req.body;
    }
    static authorize(req, res) {
    }
}
exports.UserController = UserController;
