class Carro{
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    acelerar(){
        console.log('Acelerando...');
    }
    exibir(){
        console.log();
    
    }
}
let carro = new Carro('Honda', 'Civic', 2020);
carro.acelerar();
carro.exibir(); 