"use strict";
class Cachorro {
    //---------------------------------------  Metodo construtor ------------------------------//
    //Criar um novo objeto da classe, possamos reber cvalors para qe a aclasse utilize-os//
    // Se o progamador não criar o apropria linguagem cria//
    // So pode ter um método unico
    // (public) encurtador de linhas faz que uma propriedade vire publica
    constructor(
    // public nome: string,
    raca, idade) {
        //this chamar um  paramentro dentro da propia {}
        this.cor = 'preto';
        this.peso = 60;
        this.altura = 0.4;
        this.vacinado = true;
        this.raca = raca;
        this.idade = idade;
    }
    somar(a, b) {
        return a + b;
    }
}
let c = new Cachorro('puldo', 12);
console.log(c.nome);
console.log(c.idade);
//Objeto é Instancia de um classe
