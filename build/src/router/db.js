"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// const uri: string = "mongodb+srv://kamaluddin:chelharthar@kashif-ucesm.mongodb.net/test?retryWrites=true&w=majority";
var uri = "mongodb+srv://bootcamp:bootcamp@cluster0-kgzuu.mongodb.net/test?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, { useNewUrlParser: true });
exports.default = mongoose_1.default;
