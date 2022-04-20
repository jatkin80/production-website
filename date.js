const apiKey = 'o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD'
const queryString = (window.location.search)
const queryParameters = new URLSearchParams(queryString)
const newDate = queryParameters.get("newDate")
console.log(newDate)


const $title = document.querySelector('#title')
const $date = document.querySelector('#date')
const $picture = document.querySelector('#picture')
const $explanation = document.querySelector('#explanation')


fetch(`https://api.nasa.gov/planetary/apod?api_key=${ apiKey }&q=${newDate}`)
    .then(response => response.json())

.then(data => {
    useApiData(data)
})

function useApiData(data) {
    $title.textContent = data.title
    $date.textContent = data.date
    $picture.src = data.hdurl
    $explanation.textContent = data.explanation
}