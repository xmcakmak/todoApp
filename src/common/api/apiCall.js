
export default async function apiCall({ config, requestBody, parameters, contentType }) {

    const fetchOptions = {
        method: config.method,
        headers: {
            "Content-Type": contentType,
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        mode: "cors",
    }    

    if (requestBody) {
            fetchOptions.body = JSON.stringify(requestBody)
    }

    const baseUrl = "http://192.168.1.11:3001/todos"

    let url = baseUrl + config.path

    const response = await fetch(url, fetchOptions)


}