// Parte 1 - Projeto CEP
function searchCep() {

    let cep = Number(prompt('Digite o CEP, somente números: '));

    //Parte 3 - Projeto CEP - Salva o endereço do localStorage na variável
    const saveLocalStorage = (JSON.parse(localStorage.getItem('endereco')));

    if (cep.length < 8 || isNaN(cep)) {
        alert('Digite um CEP válido');
    }
    //Parte 3 - Projeto CEP - Verifica se o CEP já foi pesquisado
    if (cep == (justNumbers(saveLocalStorage.cep))) {
        return alert('CEP já pesquisado' + '\n' +
            `Endereço: ${saveLocalStorage.logradouro}, ${saveLocalStorage.complemento == "" ? 'Sem complemento' : saveLocalStorage.complemento} 
        ${saveLocalStorage.bairro} - ${saveLocalStorage.localidade}/${saveLocalStorage.uf}`);
    }
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //console.log(JSON.stringify(data));
            if (data.erro) {
                alert('CEP não encontrado');
                return searchCep();
            }
            if (data) {
                alert(`Endereço: ${data.logradouro}, ${data.complemento == "" ? 'Sem complemento' : data.complemento}                 
                ${data.bairro} - ${data.localidade}/${data.uf}`);

                //Parte 2 - Projeto CEP
                let dataOk = confirm('Os dados estão do endereço estão correto?');
                if (dataOk === true) {
                    localStorage.setItem('endereco', JSON.stringify(data));
                }
                else {
                    alert('Digite o CEP novamente');
                    searchCep();
                }

            }
        })
        .catch(error => {
            console.log('Erro:', error);
        });
}
function justNumbers(string) {
    let numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}
searchCep();