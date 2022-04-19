/* Script para o calculo das operações matematicas

 -soma
 -subtração
 -multiplicação
 -divisao
 -resto

 Sera necessario mais 2 variaveis para receber os numeros dos usuarios*/


 var numero1;
 var numero2;

 // para obter o numero digitado pelo usuario usaremos o comando prompt (que um input para dados)

 numero1 = prompt("Digite um numero","0");
 numero2 = prompt("Digite outro numero");

 var soma = parseInt (numero1) + parseInt (numero2);
 var subtrair = numero1 - numero2;
 var multiplicar = numero1 * numero2;
 var dividir = numero1 / numero2;
 var resto = numero1 % numero2;

 alert("O resultado das operaçoes é:\n\n"+
 "soma:"+soma+
 "\nSubtração:"+subtrair+
 "\nMultiplicação:"+multiplicar+
 "\nDivisão:"+dividir+
 "\nResto:"+resto);
 

 