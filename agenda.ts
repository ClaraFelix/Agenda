import { Pessoa } from "./pessoa"

export class Agenda {
    private _nome:string;
    private _ano: number;
    private _altura: number;
    private _pessoa1: string;
    private _pessoa2: string;
    private _pessoa3: string;
    private _pessoa4: string;
    private _pessoa5: string;

    public constructor(nome:string, ano: number, altura: number){

        this._nome = nome;
        this._ano = ano;
        this._altura = altura;
    
        }public get nome() : string {
            return this._nome;
        }
        
        public set nome(nome : string) {
            this._nome = nome;
        }
        public get ano() : number {
            return this._ano;
        }
        
        public set ano(ano : number) {
            this._ano = ano;
        } 
        public get altura() : number {
            return this._altura;
        }
        
        public set altura(altura : number) {
            this._altura = altura;

        }public get pessoa1() : string {
            return this._pessoa1;
    
        }public set pessoa1(pessoa1 : string) {
            this._pessoa1 = pessoa1;
        }
        public get pessoa2() : string {
            return this._pessoa2;
        }
        
        public set pessoa2(pessoa2 : string) {
            this._pessoa2 = pessoa2;
        } 
        public get pessoa3() : string {
            return this._pessoa3;
        }
        
        public set pessoa3(pessoa3 : string) {
            this._pessoa3 = pessoa3;
    
        } 
        public get pessoa4() : string {
            return this._pessoa1;
    
        }public set pessoa4(pessoa4 : string) {
            this._pessoa4 = pessoa4;
        }
        public get pessoa5() : string {
            return this._pessoa5;
        }
        
        public set pessoa5(pessoa5 : string) {
            this._pessoa5 = pessoa5;
        
        }private pessoa: Pessoa[] = [];
        public armazenaPessoa(pessoa1: string, pessoa2: string, pessoa3: string, pessoa4: string, pessoa5: string){
            let p  = new Pessoa();
            this.pessoa.push(p);
        
        }public imprimirAgenda() {
            console.log(`
            INFORMAÇÕES:
            Pessoa 1: ${this.pessoa1},
            Pessoa 2: ${this.pessoa2},
            Pessoa 3: ${this.pessoa3},
            Pessoa 4: ${this.pessoa4},
            Pessoa 5: ${this.pessoa5},
            `) 

    }private agenda: Agenda[] = [];
            public buscaPessoa(nome:string){
            let a = new Agenda("Ana", 2000, 1.60);
            this.agenda.push(a);
       
    }private agend: Agenda[] = [];
        public buscaPesso(nome:string){
        let b = new Agenda("Maria", 1988, 1.69);
        this.agenda.push(b);
    
    }private agen: Agenda[] = [];
    public buscaPess(nome:string){
    let c = new Agenda("João", 1960, 1.80);
    this.agenda.push(c);
    
    }private age: Agenda[] = [];
    public buscaPes(nome:string){
    let d = new Agenda("Pedro", 1970, 1.50);
    this.agenda.push(d);
    
    }private ag: Agenda[] = [];
    public buscaPe(nome:string){
    let e = new Agenda("Marcos", 1990, 1.90);
    this.agenda.push(e);
    
    }   


}


















