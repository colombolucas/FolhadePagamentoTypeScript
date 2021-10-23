//"Controller"
var Pessoa = /** @class */ (function () {
    function Pessoa(id, nome, idade, enderecos) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.enderecos = enderecos;
        this.pessoa = {};
        this.pessoa.Id = id;
        this.pessoa.Nome = nome;
        this.pessoa.Idade = idade;
        this.pessoa.Enderecos = enderecos;
    }
    return Pessoa;
}());
var Enderecos = /** @class */ (function () {
    function Enderecos(id, logradouro, numero, complemento) {
        this.id = id;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.endereco = {};
        this.endereco.Id = id;
        this.endereco.logradouro = logradouro;
        this.endereco.numero = numero;
        this.endereco.complemento = complemento;
    }
    return Enderecos;
}());
/* Criar um algoritmo que mostre 10 registro de pessoas, onde cada pessoa possua uma lista de endereços */
console.log("Criar um algoritmo que mostre 10 registro de pessoas, onde cada pessoa possua uma lista de endereços");
console.log("");
var pessoa1 = new Pessoa(1, "Lucas Colombo", 27, [1, "Jose bonfante", 21, "Bar"]);
var pessoa2 = new Pessoa(2, "Karen Melegaro", 19, [2, "Jose dos Alfineteiros", 934, "Condominio dos Bruxos"]);
var pessoa3 = new Pessoa(3, "Amanda Rodrigues", 17, [3, "Cardinelio Gonçalves", 234, "Sitio Madeira"]);
var pessoa4 = new Pessoa(4, "Luan Smith", 32, [4, "Rua Felipe Colombo", 1063, "Moradas do Bosque"]);
var pessoa5 = new Pessoa(5, "Marli Abreu", 54, [5, "Jorge Lacerda", 125, "Em frente a padaria"]);
var pessoa6 = new Pessoa(6, "Smigol Tristin", 23, [6, "Alvaro Catão", 666, "Condominio Francesa"]);
var pessoa7 = new Pessoa(7, "Tester testador testado", 20, [7, "Rua dos Tester", 1010, "Em frente a testera"]);
var pessoa8 = new Pessoa(8, "Principe Caspian", 33, [8, "Rua dos nobres", 921, "Condominio da nobreza real"]);
var pessoa9 = new Pessoa(9, "Afrodite", 19, [9, "Rua da Grecia", 334, "Condominio dos Deuses Gregos"]);
var pessoa10 = new Pessoa(10, "Gaspar, o fantasminha camarada", 90, [10, "Rua dos mortos", 934, "Condominio dos que não estão vivos"]);
console.log(pessoa1.pessoa);
console.log(pessoa2.pessoa);
console.log(pessoa3.pessoa);
console.log(pessoa4.pessoa);
console.log(pessoa5.pessoa);
console.log(pessoa6.pessoa);
console.log(pessoa7.pessoa);
console.log(pessoa8.pessoa);
console.log(pessoa9.pessoa);
console.log(pessoa10.pessoa);
/* O algoritmo deverá após listar todos os registros, adicionar um endereço novo aos registros 1, 3, 5, 7 e 9 */
console.log("O algoritmo deverá após listar todos os registros, adicionar um endereço novo aos registros 1, 3, 5, 7 e 9");
console.log("");
pessoa1.enderecos = [1, "Pessoa 1 com novo Endereço", 312, "Rua Almeida"];
pessoa3.enderecos = [3, "Pessoa 3 com novo Endereço", 312, "Rua Florentina"];
pessoa5.enderecos = [5, "Pessoa 5 com novo Endereço", 394, "Rua Jertudes"];
pessoa7.enderecos = [7, "Pessoa 7 com novo Endereço", 321, "Sitio Pokemon"];
pessoa9.enderecos = [9, "Pessoa 9 com novo Endereço", 95, "Alistoteles Pascoale Street"];
console.log(pessoa1.enderecos);
console.log(pessoa3.enderecos);
console.log(pessoa5.enderecos);
console.log(pessoa7.enderecos);
console.log(pessoa9.enderecos);
console.log("");
/* O algoritmo deverá listar todos os registros, alterar o nome e a idade dos registro 2, 4, 6, 8 e 10 */
console.log("O algoritmo deverá listar todos os registros, alterar o nome e a idade dos registro 2, 4, 6, 8 e 10 ");
console.log("");
pessoa2.pessoa.Nome = "Malequias Safari";
pessoa2.pessoa.Idade = 30;
pessoa4.pessoa.Nome = "Josue Trombete";
pessoa4.pessoa.Idade = 10;
pessoa6.pessoa.Nome = "Ezequiel Centenario";
pessoa6.pessoa.Idade = 6;
pessoa8.pessoa.Nome = "Nascido Recente";
pessoa8.pessoa.Idade = 3;
pessoa10.pessoa.Nome = "Juntos Venceremos";
pessoa10.pessoa.Idade = 14;
console.log(pessoa2.pessoa.Nome);
console.log(pessoa2.pessoa.Idade);
console.log(pessoa4.pessoa.Nome);
console.log(pessoa4.pessoa.Idade);
console.log(pessoa6.pessoa.Nome);
console.log(pessoa6.pessoa.Idade);
console.log(pessoa8.pessoa.Nome);
console.log(pessoa8.pessoa.Idade);
console.log(pessoa10.pessoa.Nome);
console.log(pessoa10.pessoa.Idade);
