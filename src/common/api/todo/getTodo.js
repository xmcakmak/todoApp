// Config
import { API } from "@common/Config"

// Redux
import store from "@redux/store"
import { getTodosRequest, getTodosSuccess, getTodosFailure } from "@redux/slices/todoSlice"

// Helper
import apiCall from "../apiCall"

export default async function getTodo(){
    store.dispatch(getTodosRequest())

    const response = await apiCall({
        baseURL: API.BASE_URL,
        config: API.TODO.GET_TODOS
    })
    //console.table(response)
    if(response){
        store.dispatch(getTodosSuccess(response))
    } else{
        store.dispatch(getTodosFailure(""))
    }
}