const porcentagem = 89;

if (porcentagem < 0 || porcentagem > 100) {
    console.log("Falha, nota incorreta");
    
} else if (porcentagem >= 90) {
  console.log("Conceito A");
} else if (porcentagem >= 80) {
  console.log("Conveito B"); 
} else if (porcentagem >= 70) {
  console.log("Conceito C"); 
} else if (porcentagem >= 60) {
  console.log("Conceito D"); 
} else if (porcentagem >= 50) {
  console.log("Conceito E"); 
} else {
  console.log("Conceito F"); 
}
/*
Exercício 7
Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
Copiar
*/


