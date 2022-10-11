"use strict";
/**let pessoa ={
    nome: 'Pietro',
    idade: 22,
    cpf: '111 111 111 11',
    solteiro: false ,
    habilidades: [ 'JAVA ANGULAR', 'NODE', 'SPRING BOOT' ],
    endereco:{
        rua:'Rua triste',
        numero: 555,
        estado: 'SP',
        complemento:"sem complemento ",
        cep: '11111-0000'
    }

}
let pessoa2 ={
    nome: 'Pietro',
    idade: 22,
    cpf: '111 111 111 11',
    solteiro: false ,
    habilidades: [ 'JAVA ANGULAR', 'NODE', 'SPRING BOOT' ],
    endereco:{
        rua:'Rua triste',
        numero: 555,
        estado: 'SP',
        complemento:"sem complemento ",
        cep: '11111-0000'
    },
    rg: '234 3224 3245',
}
**/
const p = {
    altura: 1.9,
    cpf: '2222 22222 222222 ',
    nome: 'Alura',
    habilidade: ['Oreiudo'],
    idade: '22',
    solteiro: true,
    endereco: {
        rua: 'Rua triste',
        numero: 555,
        estado: 'SP',
        complemento: 'sem complemento ',
        cep: '11111-0000'
    },
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome);
    }
};
const p2 = {
    altura: 1.9,
    cpf: '222 989889 8 898 ',
    nome: 'Matador de porco',
    habilidade: ['Oreiudo', 'Cabecudo'],
    idade: '22',
    solteiro: true,
    endereco: {
        rua: 'Rua feliz',
        numero: 5525,
        estado: 'SPP',
        complemento: 'com complemento ',
        cep: '11111-0000-111111'
    },
    cumprimentar() {
        console.log('Olá a todos prazer em conhece-los ' + this.nome);
    }
};
