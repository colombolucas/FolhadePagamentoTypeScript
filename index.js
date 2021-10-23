"use strict";
exports.__esModule = true;
function modelo(nome, salario, horasExtra) {
    console.log(nome);
    console.log(salario);
    console.log(horasExtra);
}
var nome = process.argv[2];
var salario = process.argv[3];
var horasExtra = process.argv[4];
//Controller
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, vlrSalarioBruto, vlrHorasExtras, pctFaixaDescontoINSS, faixadeDescontoIR, valordeDescontadoIR, vlrSalarioLiquido) {
        this.nome = nome;
        this.vlrSalarioBruto = vlrSalarioBruto;
        this.vlrHorasExtras = vlrHorasExtras;
        this.pctFaixaDescontoINSS = pctFaixaDescontoINSS;
        this.faixadeDescontoIR = faixadeDescontoIR;
        this.valordeDescontadoIR = valordeDescontadoIR;
        this.vlrSalarioLiquido = vlrSalarioLiquido;
        this.funcionario = {};
        this.funcionario.nome = process.argv[2];
        this.funcionario.vlrSalarioBruto = salario;
        this.funcionario.vlrTotalHorasExtra = this.calculoHoraExtra(salario, horasExtra);
        this.funcionario.pctFaixaDescontoINSS = this.faixaDescontoINSS(salario);
        this.funcionario.valorDescontadoINSS = this.valorDescontadoINSS(salario);
        this.funcionario.faixadeDescontoIR = this.faixaDescontoIR(salario);
        this.funcionario.valordeDescontadoIR = this.valorDescontadoIR(salario);
        this.funcionario.valorSalarioLiquido = this.valorSalarioLiquido(salario, horasExtra);
    }
    Funcionario.prototype.calculoHoraExtra = function (salario, horasExtra) {
        var calculo = (salario / 200) * horasExtra;
        var arredondado = parseFloat(calculo.toFixed(2));
        return arredondado;
    };
    Funcionario.prototype.faixaDescontoINSS = function (salario) {
        if (salario <= 1100) {
            var calculoFaixa = 7.5 + '%';
            return calculoFaixa;
        }
        else if (salario >= 1101 && salario <= 2203) {
            var calculoFaixa = 9 + '%';
            return calculoFaixa;
        }
        else if (salario >= 2204 && salario <= 3305) {
            var calculoFaixa = 12 + '%';
            return calculoFaixa;
        }
        else {
            var calculoFaixa = 14 + '%';
            return calculoFaixa;
        }
    };
    Funcionario.prototype.valorDescontadoINSS = function (salario) {
        var pct = this.faixaDescontoINSS(salario); //Pega a porcentagem de desconto da faixa do INSS
        var semPorcentagem = pct.replace('%', "").replace('%', ""); // Transforma a faixa de desconto sem porcentagem
        var calculo1 = parseInt(semPorcentagem) / 100; // Divide a porcentagem por 100 para fazer os cálculos
        var calculoFinal = salario * calculo1; // Feito o cálculo do salário * a porcentagem para ter o resultado final
        var calculoFinalArredondado = parseFloat(calculoFinal.toFixed(2)); // Arrendondado o cálculo final para 2 casas decimais.
        return calculoFinalArredondado;
    };
    Funcionario.prototype.faixaDescontoIR = function (salario) {
        if (salario <= 1903) {
            var calculoFaixa = 0 + '%';
            return calculoFaixa;
        }
        else if (salario >= 1904 && salario <= 2826) {
            var calculoFaixa = 7.50 + '%';
            return calculoFaixa;
        }
        else if (salario >= 2827 && salario <= 3751) {
            var calculoFaixa = 15 + '%';
            return calculoFaixa;
        }
        else if (salario >= 3752 && salario <= 4664) {
            var calculoFaixa = 22.50 + '%';
            return calculoFaixa;
        }
        else {
            var calculoFaixa = 27.50 + '%';
            return calculoFaixa;
        }
    };
    Funcionario.prototype.valorDescontadoIR = function (salario) {
        var pct = this.faixaDescontoIR(salario); //Pega a porcentagem de desconto da faixa do IR
        var semPorcentagem = pct.replace('%', "").replace('%', ""); // Transforma a faixa de desconto sem porcentagem
        var calculo1 = parseInt(semPorcentagem) / 100; // Divide a porcentagem por 100 para fazer os cálculos
        var calculoFinal = salario * calculo1; // Feito o cálculo do salário * a porcentagem para ter o resultado final
        var calculoFinalArredondado = parseFloat(calculoFinal.toFixed(2)); // Arrendondado o cálculo final para 2 casas decimais.
        return calculoFinalArredondado;
    };
    Funcionario.prototype.valorSalarioLiquido = function (salario, horasExtra) {
        var descontoINSS = this.valorDescontadoINSS(salario);
        var descontoIR = this.valorDescontadoIR(salario);
        var valorHorasExtra = this.calculoHoraExtra(salario, horasExtra);
        var calculoFim = salario - descontoINSS - descontoIR + valorHorasExtra;
        return calculoFim;
    };
    return Funcionario;
}());
var funcionario1 = new Funcionario(nome, salario, horasExtra, salario, salario, salario, horasExtra);
console.log(funcionario1.funcionario);
