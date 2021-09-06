let chessPiece = 'torrE';

switch(chessPiece.toLocaleLowerCase()) {
    case 'rei': console.log('Rei -> Uma casa apenas para qualquer direção');
     break;
    case 'rainha': console.log('Rainha -> Diagonal, horizontal e vertical');
     break;
    case 'bispo': console.log('Bispo -> Diagonal');
     break;
    case 'cavalo': console.log('Cavalo -> "L" pode pular as peças');
     break;
    case 'torre': console.log('Torre -> Horizontal e vertical');
     break;
    case 'peão': console.log('Peão -> Apenas umas casa para frente, no primeiro movimento podem ser duas casas');
     break;
  default:
  console.log('Erro, peça inválida');       
}

/*
Exercício 6
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/


