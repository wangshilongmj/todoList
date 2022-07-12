import filter from "./filter";
import todos from "./todo";
import { combineReducers } from "@reduxjs/toolkit";


const todoApp = combineReducers({
    filter,
    todos
})

export default todoApp;


