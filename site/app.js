const apiKey = "o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD"
const $title = document.querySelector("#title")
const $date = document.querySelector("#date")
const $picture = document.querySelector("#picture")
const $explanation = document.querySelector("#explanation")
const form = document.querySelector("form")
const button = document.querySelector("button")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newDate = formData.get("newDate")
    window.location.href = `date.html?newDate=${newDate}`
})

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey }`)
    .then(response => response.json())
    .then(data => {
        useApiData(data)
    })
    .catch(error => {
        h1.textContent = "Let's Get You Back on Solid Ground"
        button.textContent = "Return Home"
        console.error(error)
    })


function useApiData(data) {
    const currentDate = new Date().toISOString().slice(0, 10)
    newDate.max = currentDate
    newDate.min = "1995-06-16"
    $title.textContent = data.title
    $date.textContent = data.date
    $picture.src = data.hdurl
    $explanation.textContent = data.explanation
}