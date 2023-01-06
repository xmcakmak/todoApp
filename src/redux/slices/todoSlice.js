import { createSlice } from "@reduxjs/toolkit"
import { API_STATUS } from "@common/Enums"

const initialState = {
	getTodosApiStatus: API_STATUS.NONE,
	postTodoApiStatus: API_STATUS.NONE,
	deleteTodoApiStatus: API_STATUS.NONE,
	updateTodoApiStatus: API_STATUS.NONE,

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

		// UPDATE TODO
		updateTodoRequest: (state) => {
			state.postTodoApiStatus = API_STATUS.REQUEST
		},
		updateTodoSuccess: (state) => {
			state.postTodoApiStatus = API_STATUS.SUCCESS
		},
		updateTodoFailure: (state) => {
			state.postTodoApiStatus = API_STATUS.FAILURE
		},

		// DELETE TODO
		deleteTodoRequest: (state) => {
			state.deleteTodoApiStatus = API_STATUS.REQUEST
		},
		deleteTodoSuccess: (state) => {
			state.deleteTodoApiStatus = API_STATUS.SUCCESS
		},
		deleteTodoFailure: (state) => {
			state.deleteTodoApiStatus = API_STATUS.FAILURE
		},
	},
})

export const {
	getTodosRequest,
	getTodosSuccess,
	getTodosFailure,

	postTodoRequest,
	postTodoSuccess,
	postTodoFailure,

	deleteTodoRequest,
	deleteTodoSuccess,
	deleteTodoFailure,

	updateTodoRequest,
	updateTodoSuccess,
	updateTodoFailure,
    
} = todoSlice.actions

export default todoSlice.reducer
