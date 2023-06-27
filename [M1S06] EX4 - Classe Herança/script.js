class Veiculo {
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
  
  obterDetalhes(){
    console.log(`Veícumo marca: ${this.marca} Ano: ${this.ano}`)
  }
}

class Carro extends Veiculo {
  constructor (marca, ano, portas){
    super(marca, ano);
    this.portas = portas;
  }

    obterDetalhes(){
    console.log(`Veícumo marca: ${this.marca} Ano: ${this.ano} Portas: ${this.portas}`)
  }

}

const carroUm = new Carro('Ford', 2013, 5);

carroUm.obterDetalhes();
