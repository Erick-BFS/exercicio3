let contador = 0
let numero = prompt('escreva um número inteiro e positivo.')

while ((contador-1) !=numero) {

    if(numero < 0){
        alert("Apenas numeros positivos")
        break;
    }
    if(!Number(numero)){
        alert("Apenas numeros")
        break;
    }

    contador++
    console.log(contador)
}
