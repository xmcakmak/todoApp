// Config
import { API } from "@common/Config"

// Redux
import store from "@redux/store"
import { postTodoRequest, postTodoSuccess, postTodoFailure } from "@redux/slices/todoSlice"

// Helper
import apiCall from "../apiCall"

export default async function postTodo({ title, status }) {

    store.dispatch(postTodoRequest())

    let todo = { id: Date.now(), title: title, status: status }

    const response = await apiCall({
        baseURL: API.BASE_URL,
        config: API.TODO.POST_TODO,
        requestBody: todo
    })

    if(response){
        store.dispatch(postTodoSuccess(response))
    } else{
        store.dispatch(postTodoFailure(""))
    }
    
}


