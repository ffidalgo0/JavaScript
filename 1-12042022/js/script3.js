/*
Script para solicitaçao de cor ao usuario. 
Quando o usuario digita a cor desejada,entao iremos mudar a cor de fundo body. 
Caso o usuario digite uma cor nao listada,mudaremos a cor de fundo para uma ore estabelecida e sera exibida uma mensagem ao usuario*/

var cor = prompt("Digite:\n\n"+

"\n1 - Preto"+
"\n2 - Amarelo"+
"\n3 - Vermelho"+
"\n4 - Azul"+
"\n5 - Laranja");

if(cor == 1){
   document.body.style.backgroundColor="Black";

}
else if (cor == 2){
    document.body.style.backgroundColor="yellow";

}
else if (cor == 3){
    document.body.style.backgroundColor="Red";

}
else if (cor == 4){
    document.body.style.backgroundColor="Blue";

}
else if(cor == 5){
    document.body.style.backgroundColor="Orange";

}
else{
    document.body.style.backgroundColor="teal";
    alert("Você digitou uma opção inexistente");
}

