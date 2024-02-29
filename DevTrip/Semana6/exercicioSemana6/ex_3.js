const dados = fetch("https://data.json")
    .then(response => response.json())
            
    .then(data => {
        //console.log(dados);
        return data;
    })
    .catch(error => {
        console.log(error);
    });
//console.log(teste);
document.write(dados);
