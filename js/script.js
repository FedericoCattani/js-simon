/*

-Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.

- Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).

- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


1. variabili per i 5 numeri da stampare in pagina; selettore per stampare;

2. time function 

3. variabili di input per risposta utente;

4. controllo dei numeri estratti, che non si ripetano;


*/

const numbersRandom = [];

//numbersRandom.push(randomNumber(1, 50));
//randomNumber(1,50);




for (let i = 0; i < 5; i++) {
    
  function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(randomNumber(1,50,));
}

document.querySelector(".numbers").innerHTML = `
  ${numbersRandom}
`;