const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)

console.log(queryParams)


function useApiData(data) {

    document.querySelector("#content").innerHTML += `<img src="${ data.url }">`
    document.querySelector("#content").innerHTML += data.explanation
}

const api_key = "o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD"
fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&q=date`)
    .then((response) => response.json())
    .then(parsedResponse => {
        return useApiData(parsedResponse)

    })