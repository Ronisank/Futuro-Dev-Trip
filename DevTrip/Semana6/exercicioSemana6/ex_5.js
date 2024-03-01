const imagesCat = "https://api.thecatapi.com/v1/images/search?limit=10"

fetch(imagesCat)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(JSON.stringify(data));
        data.forEach(element => {
            document.write(`<img src="${element.url}" alt="cat" width="200" height="200">`);
        })
            .catch(error => {
                console.log(error);
            })
    });