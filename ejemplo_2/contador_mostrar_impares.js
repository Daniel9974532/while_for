//Cree un programa que imprima los números
// impares entre 0 y 100

let contador = 0;

while (contador <= 100) {
  if (contador % 2 != 0){
    console.log("impar", contador);
  }else{
    console.log("par", contador);
  }
  contador = contador + 1;
}