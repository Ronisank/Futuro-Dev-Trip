fetch("data.json")
    .then(response => {
        return response.json()})
    .then(data => {
        console.log(JSON.stringify(data));
        document.write(JSON.stringify(data));
        
    })
    .catch(error => {
        console.log(error);
    });

