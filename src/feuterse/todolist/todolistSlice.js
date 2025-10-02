import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchtodos = createAsyncThunk('todos/fetchtodos' , async () => {
    const res = await axios.get('https://dummyjson.com/todos')
    return res.data.todos
})

const todolistSlice  = createSlice({
    name:'todo',
    initialState:{
        todos:[],
        status:'idle',
        error:null
    } , reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchtodos.pending ,  (state) => {
                state.status = 'loading'
            })
            .addCase(fetchtodos.fulfilled ,  (state , action) => {
                state.status = 'success'
                state.todos = action.payload;
            })
            .addCase(fetchtodos.rejected ,  (state , action) => {
                state.status = 'error'
                state.error = action.error.message;
            })

    }

})


export default todolistSlice.reducer