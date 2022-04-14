const $form = document.querySelector('form')
$form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredDate = formData.get("enteredDate")

    console.log(enteredDate)
    localStorage.setItem("enteredDate", enteredDate)


})

function useApiData(data) {

    document.querySelector("#media-section").innerHTML += `<img src="${ data.url }">`
    document.querySelector("#description").innerHTML += data.explanation
}

const api_key = "o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD"
fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
    .then((response) => response.json())
    .then(parsedResponse => {
        return useApiData(parsedResponse)

    })