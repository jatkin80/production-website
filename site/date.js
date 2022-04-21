const apiKey = 'o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD'
const url = new URL(window.location)
console.log(url)
const queryString = new URLSearchParams(url.search)
console.log(queryString)
const newDate = `${queryString.get("newDate")}`
const $title = document.querySelector('#title')
const $date = document.querySelector('#date')
const $picture = document.querySelector('#picture')
const $explanation = document.querySelector('#explanation')
const form = document.querySelector('form')



fetch(`https://api.nasa.gov/planetary/apod?api_key=${ apiKey }&date=${newDate}`)
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