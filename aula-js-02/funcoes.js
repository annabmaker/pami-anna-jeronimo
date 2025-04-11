function SomaSimples(){
    return 3 + 4
}

console.log(SomaSimples())

function SomaComParametros(n1 , n2){
    return n1 + n2
}

console.log(SomaComParametros(3,4))
console.log(SomaComParametros(10,4))

//Função anonima
//Arrow Function
const Potencia = (n , e) => {
    let result = Math.pow(n ,e)
 console.log(`${n} elevado a ${e} é ${result}`)
}

Potencia (4 , 8)


//Função que calcule a media do aluno  e exiba o resultado 
// media >= 6,00 = Aprovado
// media >=  4,00 || < 6,00 = Recuperação
// media < 4,00 = Reprovado

function calcularMedia(nota1, nota2) { //Criação da Função e atribuição do nome e parametro 
  let media = (nota1 + nota2) / 2; //declaração da variavel media/ recebimento da logica
  console.log(calcularMedia(3, 6));
  //Saida da informação para o usuario
  if (media >= 6.00) { //Processamento 
    console.log("Resultado: Aprovado"); //Saida de dados para o usuario
  } else if (media >= 4.00 && media < 6.00) { //processamento/logica
    console.log("Resultado: Recuperação"); //Saida de dados para o usuario
  } else { 
    console.log("Resultado: Reprovado"); //Saida de dados para o usuario
  }
}
calcularMedia(9, 3); // Para fazer o calculo com a var e  inserir informações


//correção professor

const ResultadoMedia =(n1 , n2) =>{
    let media = (n1 + n2)/2

    if(media < 4.00){
        return 'Reprovado'
    } else if (media <6.00){
        return 'recuperção'
    } else {
        return 'Aprovado'
    }
}
console.log (ResultadoMedia)(6.00 , 9.00)

//Outra Solução

const ResultadoMediaII = ( n1 ,n2) => {
    let media = (n1 + n2)/2
    
    if(media <4.00) {
        return "Reprovado"
    }
    if ( media < 6.00){
        return "Recuperação"
    }
    return "Aprovado"
}
console.log(ResultadoMediaII(6.00 , 7.00))

