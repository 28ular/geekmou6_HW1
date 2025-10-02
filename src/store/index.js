import {configureStore} from "@reduxjs/toolkit";
import TodoReducer from '../feuterse/todolist/todolistSlice.js'

export const store = configureStore({
    reducer: {
        TodoReducer
    }
})