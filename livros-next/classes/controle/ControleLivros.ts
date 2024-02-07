import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, 'O Caso dos 10 Negrinhos', 
    '“O Caso dos Dez Negrinhos” é um suspense de Agatha Christie. Dez estranhos são convidados para uma ilha e acusados de crimes. Um a um, eles são assassinados, seguindo um poema infantil.',
    ['Agatha Christ']),

    new Livro(2, 2, 'Moby Dick', 
    '“Moby Dick”, de Herman Melville, é uma obra épica que narra a viagem do navio baleeiro Pequod e a busca obsessiva de seu capitão, Ahab, pela baleia branca Moby Dick1.',
    ['Herman Melville']),

    new Livro(3, 3, 'O Pequeno Principe', 
    '“O Pequeno Príncipe” é uma obra literária de Antoine de Saint-Exupéry. Conta a história de um piloto que encontra um príncipe de um asteroide, B 6121. A obra aborda temas como amor, amizade e sabedoria infantil2.', 
    ['Antoine de Saint-Exupéry']),

    new Livro(4, 4, 'Doce Feito Mel', 
    '“Doce Feito Mel”, de Zibombrete, é uma história divertida sobre um estudante que, quando questionado sobre palavras doces e bonitas, responde com ‘goiabada’, surpreendendo a todos com sua originalidade.', 
    ['Zibombrete'])
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

