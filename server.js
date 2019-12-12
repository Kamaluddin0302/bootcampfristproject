"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var db_1 = __importDefault(require("./src/router/db"));
var cors_1 = __importDefault(require("cors"));
var db = db_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("database successfully connected");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("server is running");
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/todo", require("./src/router"));
