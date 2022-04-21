const apiKey = "o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD"


const $title = document.querySelector("#title")
const $date = document.querySelector("#date")
const $picture = document.querySelector("#picture")
const $explanation = document.querySelector("#explanation")
const form = document.querySelector("form")


form.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const newDate = formData.get("newDate")
  console.log(newDate)

  console.log(formData)

  window.location.href = `date.html?newDate=${newDate}`
})


fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey }`)
  .then(response => response.json())
  .then(data => {
    useApiData(data)
  })


function useApiData (data) {
  $title.textContent = data.title
  $date.textContent = data.date
  $picture.src = data.hdurl
  $explanation.textContent = data.explanation
}