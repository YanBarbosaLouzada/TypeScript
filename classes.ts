class Cachorro {

    //atributos ou propiedades

    nome: string 
    raca: string 
    cor: string = 'preto'
    idade: number 
    peso: number = 60
    altura: number = 0.4
    vacinado: boolean = true

    //---------------------------------------  Metodo construtor ------------------------------//
    //Criar um novo objeto da classe, possamos reber cvalors para qe a aclasse utilize-os//
    // Se o progamador não criar o apropria linguagem cria//
    // So pode ter um método unico
    // (public) encurtador de linhas faz que uma propriedade vire publica

    constructor(
        // public nome: string,
        raca: string,
        idade: number
        ) {

        //this chamar um  paramentro dentro da propia {}
        
        this.raca = raca;
        this.idade = idade;
    }

 somar(a: number, b: number): number{
    return a+b
 }

}
let c = new Cachorro('puldo', 12)
console.log(c.nome)
console.log(c.idade)

//Objeto é Instancia de um classe