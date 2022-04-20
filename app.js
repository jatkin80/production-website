    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key='
    const apiKey = 'o5gNtRw010GxSEnvZU9WrzxQzGSBGjGVy5AeNHcD'

    const title = document.querySelector("#title");
    const copyright = document.querySelector("#copyright");
    const mediaSection = document.querySelector("#media-section");
    const information = document.querySelector("#description");
    const imageSection = `<a id="hdimg" href="" target="-blank">
     <div class="image-div">
     <img id="image_of_the_day" src="" alt="image-by-nasa">
     </div>
    </a>`

    function fetchData() {
        try {
            fetch((baseUrl + apiKey))
                .then(response => response.json())
                .then(json => {
                    diplaydata(json)
                })
        } catch (error) {
            console.log(error)
        }
    }

    function diplaydata(data) {

        title.innerHTML = data.title;

        if (data.hasOwnProperty("copyright")) {
            copyright.innerHTML = data.copyright;
        } else {
            copyright.innerHTML = ""
        }


        date.innerHTML = data.date;



        if (data.media_type == "video") {
            mediaSection.innerHTML = videoSection;
            document.getElementById("videoLink").src = data.url;

        } else {
            mediaSection.innerHTML = imageSection;
            document.getElementById("hdimg").href = data.hdurl;
            document.getElementById("image_of_the_day").src = data.url;
        }
        information.innerHTML = data.explanation
    }
    fetchData();