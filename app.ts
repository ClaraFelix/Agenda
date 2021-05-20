import { Agenda } from "./agenda";
import { Pessoa } from "./pessoa";

let agenda = new Agenda("Ana", 2000, 1.60);
console.log(agenda);

let nomes = new Agenda("Maria", 1988, 1.69);
console.log(nomes); 

let agend = new Agenda("João", 1960, 1.80);
console.log(agend);

let nom = new Agenda("Pedro", 1970, 1.50);
console.log(nom);

let agen = new Agenda("Marcos", 1990, 1.90);
console.log(agen);

let pessoas = new Pessoa();
agenda.armazenaPessoa("Ana","Maria","João","Pedro", "Marcos");
