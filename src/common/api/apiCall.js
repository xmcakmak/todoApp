export default async function apiCall({
    baseURL,
	config,
	requestBody,
	parameters,
	contentType = "application/json",
}) {

    let url = baseURL + config.path 

    if(parameters) {
        url = url + parameters
        console.log(url)
    }

	const fetchOpt = {
		method: config.method,
		headers: {
			Accept: "application/json",
			"Content-Type": contentType
		},
	}

    if (requestBody){
        fetchOpt.body = JSON.stringify(requestBody)
    }

	const response = await fetch(url, fetchOpt)
		.then((response) => response.json())
		.then((res) => {
            return res
		})
		.catch((error) => {
            return null
        })

        if (response) {
            return response
        } else {
            return null
        }
}