import mongoose from "mongoose";

export interface Todo extends mongoose.Document {
    title: string;
    description:Text;
    done: boolean,
}

export const TodoSchema = new mongoose.Schema({
title: { type: String, required: true},
description: { type: String, required: true},
done: { type: Boolean, default: false},
});

const TodoData = mongoose.model<Todo>("todos", TodoSchema);
export default TodoData;