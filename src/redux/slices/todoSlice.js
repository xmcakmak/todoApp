import { createSlice } from "@reduxjs/toolkit"
import { API_STATUS } from "../../common/Enums"

const initialState = {
  getTodosApiStatus: API_STATUS.NONE
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        getTodosRequest: (state) => {
            state.getTodosApiStatus = API_STATUS.REQUEST
        },
        getTodosSuccess: (state) => {
            state.getTodosApiStatus = API_STATUS.SUCCESS
        },
        getTodosFailure: (state) => {
            state.getTodosApiStatus = API_STATUS.FAILURE
        }
    }
})

export const { getTodosRequest, getTodosSuccess, getTodosFailure } = todoSlice.actions

export default todoSlice.reducer