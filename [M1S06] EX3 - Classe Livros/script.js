class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  obterInformacoes() {
    console.log('Título: ' + this.titulo + ' Autor: ' + this.autor + ' Ano publicação: ' + this.ano)
  }
  
}

const livroUm = new Livro('Clean Code', 'Robert Cecil Martin', 2008);
const livroDois = new Livro('Padrões JavaScript', 'Stoyan Stefanov', 2010);
const livroTres = new Livro('Java 8 Prático', 'Rodrigo Turini ', 2014);

livroUm.obterInformacoes();
livroDois.obterInformacoes();
livroTres.obterInformacoes();