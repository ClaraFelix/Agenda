export class Pessoa {
    private _nome:string;
    private _anoDeNascimento: number;
    private _altura: number;

    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    public get anoDeNascimento() : number {
        return this._anoDeNascimento;
    }
    
    public set anoDeNascimento(anoDeNascimento : number) {
        this._anoDeNascimento = anoDeNascimento;
    } 
    public get altura() : number {
        return this._altura;
    }
    
    public set altura(altura : number) {
        this._altura = altura;
    }
    public calculoDaIdade():number {
        let anoAtual = new Date().getFullYear();
        return anoAtual - this._anoDeNascimento;
        
    }public exibirInformações() {
        console.log(`
        INFORMAÇÕES:
        Nome: ${this.nome},
        Idade: ${this.calculoDaIdade},
        Altura: ${this._altura},
        `)
    }
}