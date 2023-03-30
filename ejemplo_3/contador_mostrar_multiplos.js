//Cree un programa que imprima los números
// múltiplos de 6 entre 0 y 100

let contador = 0;

while (contador <= 100) {
  if (contador % 6 == 0){
    console.log("ES MULTIPLO DE 6", contador);
  }
  contador = contador + 1;
}