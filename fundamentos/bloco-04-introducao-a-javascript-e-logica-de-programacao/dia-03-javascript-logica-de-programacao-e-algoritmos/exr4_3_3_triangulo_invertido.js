let n = 5;
let linha = "";
let linha2 = "";
let simbolo = "*";
let salto = " ";

for (let i = 1; i <= n; i += 1) {
    linha += simbolo;
    linha2 = "";
    
    for (let i2 = (n - i); i2 >= 1; i2 -= 1) {
        linha2 += salto; 
    } 
    console.log(linha2 + linha);
}

/* exercicio 3 - Agora inverta o lado do triângulo.

*/