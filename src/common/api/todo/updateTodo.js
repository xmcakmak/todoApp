// Config
import { API } from "@common/Config"

// Redux
import store from "@redux/store"
import { updateTodoRequest, updateTodoSuccess, updateTodoFailure } from "@redux/slices/todoSlice"

// Helper
import apiCall from "../apiCall"

export default async function updateTodo({ todo, status }) {

    store.dispatch(updateTodoRequest())

    let requestBody = { title: todo.title, status: status }

    const response = await apiCall({
        baseURL: API.BASE_URL,
        config: API.TODO.PUT_TODO,
        parameters: todo.id,
        requestBody: requestBody
    })

    if(response){
        store.dispatch(updateTodoSuccess(response))
    } else{
        store.dispatch(updateTodoFailure(""))
    }
    
}


