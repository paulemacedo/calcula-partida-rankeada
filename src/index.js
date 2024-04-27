const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your Victory rate: ', (wins) => {
    const win = parseInt(wins, 10);

    rl.question('Please enter your lose rate: ', (loses) => {
        const lose = parseInt(loses, 10);
        
        calculaElo(win,lose)

        rl.close();
      });
  });

  function calculaElo(win,lose){
    Resultado = win - lose 

    if(Resultado <= 10){
        console.log(`O Herói tem de saldo de ${win} está no nível de Ferro`);
    } else if (Resultado <= 20){
        console.log(`O Herói tem de saldo de ${win} está no nível de Bronze`);
    } else if (Resultado <= 50){
        console.log(`O Herói tem de saldo de ${win} está no nível de Prata`) 
    } else if (Resultado <= 80){
        console.log(`O Herói tem de saldo de ${win} está no nível de Ouro`)
    } else if (Resultado <= 90){
        console.log(`O Herói tem de saldo de ${win} está no nível de Diamante`)
    } else if (Resultado <= 100){
        console.log(`O Herói tem de saldo de ${win} está no nível de Lendário`)
    } else {
        console.log(`O Herói tem de saldo de ${win} está no nível de Imortal`)
    }
  }