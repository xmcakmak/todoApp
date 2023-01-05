// Config
import { API } from "@common/Config"

// Redux
import store from "@redux/store"
import { deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure } from "@redux/slices/todoSlice"

// Helper
import apiCall from "../apiCall"

export default async function deleteTodo( todoId ){

    store.dispatch(deleteTodoRequest())
    console.log("buraya girdi" + todoId)

    //let parameters =  todoId 

    const response = await apiCall({
        baseURL: API.BASE_URL,
        config: API.TODO.DELETE_TODO,
        parameters: todoId
    })

    if(response){
        store.dispatch(deleteTodoSuccess())
    } else{
        store.dispatch(deleteTodoFailure())
    }
}