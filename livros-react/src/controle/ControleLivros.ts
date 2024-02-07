import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, 'O Caso dos 10 Negrinhos', '“Dez pessoas, uma ilha e mortes misteriosas.”', ['Agatha Christ']),
    new Livro(2, 2, 'Moby Dick', '“Capitão Ahab caça a baleia branca, Moby Dick.”', ['Herman Melville']),
    new Livro(3, 3, 'O Pequeno Principe', '“Príncipe viaja, aprende sobre amor e amizade.”', ['Antoine de Saint-Exupéry']),
    new Livro(4, 4, 'Doce Feito mel', '“Me diga algumas palavras doces... - Goiabada!”', ['Zibombrete'])
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;
