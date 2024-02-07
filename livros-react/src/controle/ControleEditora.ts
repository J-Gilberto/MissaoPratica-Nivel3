import Editora from '../modelo/Editora';

class ControleEditora {
    private editoras: Array<Editora>;

    constructor() {
        
        this.editoras = [
            new Editora(1, 'O Globo'),
            new Editora(2, 'Cosac & Naif'),
            new Editora(3, 'HarperCollins'),
            new Editora(4, 'Tambaú')
        ];
    }    
    getEditoras(): Array<Editora> {
        return this.editoras;
    }
    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}
export default ControleEditora;
