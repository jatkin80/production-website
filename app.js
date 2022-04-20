    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key='
    const apiKey = 'o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD'
    const $title = document.querySelector('#title')
    const $date = document.querySelector('#date')
    const $picture = document.querySelector('#picture')
    const $explanation = document.querySelector('#explanation')

    const fetchNASAData = async() => {
        try {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log('NASA APOD data', data)
            displayData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const displayData = data => {
        $title.textContent = data.title
        $date.textContent = data.date
        $picture.src = data.hdurl
        $explanation.textContent = data.explanation
    }

    fetchNASAData()