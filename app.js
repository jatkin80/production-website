      const apiKey = 'o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD'
      const currentDate = new Date().toISOString().slice(0, 10);

      const $title = document.querySelector('#title')
      const $date = document.querySelector('#date')
      const $picture = document.querySelector('#picture')
      const $explanation = document.querySelector('#explanation')
      const form = document.querySelector('form')


      form.addEventListener("submit", (event) => {

          event.preventDefault();
          const formData = new FormData(event.target)

          const newDate = formData.get("newDate")

          window.location.href = `date.html?${newDate}`
      })


      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey }`)
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