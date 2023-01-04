import { createSlice } from "@reduxjs/toolkit"
import { API_STATUS } from "../../common/Enums"
import { React } from "react"

const initialState = {
	getTodosApiStatus: API_STATUS.NONE,
	postTodoApiStatus: API_STATUS.NONE,

	todos: [],
}

export const todoSlice = createSlice({
	name: "todo",
	initialState: initialState,
	reducers: {
		// GET TODOS
		getTodosRequest: (state) => {
			state.getTodosApiStatus = API_STATUS.REQUEST
		},
		getTodosSuccess: (state, action) => {
			state.getTodosApiStatus = API_STATUS.SUCCESS
			state.todos = action.payload
		},
		getTodosFailure: (state) => {
			state.getTodosApiStatus = API_STATUS.FAILURE
		},

		// POST TODO
		postTodoRequest: (state) => {
			state.postTodoApiStatus = API_STATUS.REQUEST
		},
		postTodoSuccess: (state) => {
			state.postTodoApiStatus = API_STATUS.SUCCESS
		},
		postTodoFailure: (state) => {
			state.postTodoApiStatus = API_STATUS.FAILURE
		},
	},
})

export const {
	getTodosRequest,
	getTodosSuccess,
	getTodosFailure,

	postTodoRequest,
	postTodoSuccess,
	postTodoFailure

} = todoSlice.actions

export default todoSlice.reducer
