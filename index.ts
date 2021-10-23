import { METHODS } from "http";
import { parse } from "path/posix";
import { argv } from "process";
import { IndexInfo } from "typescript";

function modelo(nome, salario, horasExtra) {
    console.log(nome);
    console.log(salario);
    console.log(horasExtra);
}


let nome = process.argv[2];
let salario = process.argv[3];
let horasExtra = process.argv[4];


//Interface
interface IFuncionario{
    nome: string;
    vlrSalarioBruto: any;
    vlrTotalHorasExtra: number;
    pctFaixaDescontoINSS: any;
    valorDescontadoINSS: any;
    faixadeDescontoIR: any;
    valordeDescontadoIR: number;
    valorSalarioLiquido: number; // (salário bruto - desconto INSS - desconto IR + horas extras)

}

//Controller

class Funcionario{

    public funcionario: IFuncionario = {} as IFuncionario;

    public calculoHoraExtra (salario: any, horasExtra: any) {

        let calculo = (salario/200) * horasExtra;
        let arredondado = parseFloat(calculo.toFixed(2));

        return arredondado;   
    }

    public faixaDescontoINSS(salario: any){

        if(salario <= 1100){

        let calculoFaixa = 7.5 + '%';
        return calculoFaixa;

        }else if(salario >= 1101 && salario <= 2203){

        let calculoFaixa = 9 + '%';     
        return calculoFaixa;

        }else if(salario >= 2204 && salario <= 3305){

            let calculoFaixa = 12 + '%';
            return calculoFaixa;

        }else{

            let calculoFaixa = 14 + '%';
            return calculoFaixa;

        }
    }
    public valorDescontadoINSS(salario: any){

         let pct = this.faixaDescontoINSS(salario);  //Pega a porcentagem de desconto da faixa do INSS
         const semPorcentagem = pct.replace('%', "").replace('%', ""); // Transforma a faixa de desconto sem porcentagem
         let calculo1 = parseInt(semPorcentagem) / 100;  // Divide a porcentagem por 100 para fazer os cálculos
         let calculoFinal = salario * calculo1; // Feito o cálculo do salário * a porcentagem para ter o resultado final
         let calculoFinalArredondado = parseFloat(calculoFinal.toFixed(2)); // Arrendondado o cálculo final para 2 casas decimais.


         return calculoFinalArredondado;

    }

    public faixaDescontoIR(salario: any){

        if(salario <= 1903){

        let calculoFaixa = 0 + '%';
        return calculoFaixa;

        }else if(salario >= 1904 && salario <= 2826){

        let calculoFaixa = 7.50 + '%';     
        return calculoFaixa;

        }else if(salario >= 2827 && salario <= 3751){

            let calculoFaixa = 15 + '%';
            return calculoFaixa;

        }else if(salario >= 3752 && salario <= 4664){

            let calculoFaixa = 22.50 + '%';
            return calculoFaixa;
            
        }else{

            let calculoFaixa = 27.50 + '%';
            return calculoFaixa;

        }
    }

    public valorDescontadoIR(salario: any){

        let pct = this.faixaDescontoIR(salario);  //Pega a porcentagem de desconto da faixa do IR
        const semPorcentagem = pct.replace('%', "").replace('%', ""); // Transforma a faixa de desconto sem porcentagem
        let calculo1 = parseInt(semPorcentagem) / 100;  // Divide a porcentagem por 100 para fazer os cálculos
        let calculoFinal = salario * calculo1; // Feito o cálculo do salário * a porcentagem para ter o resultado final
        let calculoFinalArredondado = parseFloat(calculoFinal.toFixed(2)); // Arrendondado o cálculo final para 2 casas decimais.


        return calculoFinalArredondado;

   }

   public valorSalarioLiquido(salario: any, horasExtra: any){

    let descontoINSS = this.valorDescontadoINSS(salario);
    let descontoIR = this.valorDescontadoIR(salario);
    let valorHorasExtra = this.calculoHoraExtra(salario, horasExtra);
    let calculoFim = salario - descontoINSS - descontoIR + valorHorasExtra;
    
    return calculoFim;

   }
    
    constructor(public nome, public vlrSalarioBruto, public vlrHorasExtras, public pctFaixaDescontoINSS, public faixadeDescontoIR, 
        public valordeDescontadoIR, public vlrSalarioLiquido){
          
        this.funcionario.nome = process.argv[2];
        this.funcionario.vlrSalarioBruto = salario;
        this.funcionario.vlrTotalHorasExtra = this.calculoHoraExtra(salario, horasExtra);
        this.funcionario.pctFaixaDescontoINSS = this.faixaDescontoINSS(salario);
        this.funcionario.valorDescontadoINSS = this.valorDescontadoINSS(salario);
        this.funcionario.faixadeDescontoIR = this.faixaDescontoIR(salario);
        this.funcionario.valordeDescontadoIR = this.valorDescontadoIR(salario);
        this.funcionario.valorSalarioLiquido = this.valorSalarioLiquido(salario, horasExtra);
            
    }

}


let funcionario1 = new Funcionario(nome, salario, horasExtra, salario, salario, salario, horasExtra);

console.log(funcionario1.funcionario);


