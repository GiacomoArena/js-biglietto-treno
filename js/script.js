
const data = new Date();
const giorno = data.getDate() + "/";
const mese = data.getMonth() + 1 + "/";
const anno = data.getFullYear();

const nome = prompt('Come ti chiami? nome cognome:')

const km = prompt("quanti KM hai intenzione di percorrere?");

console.log('km da percorrere', km);

const age = prompt("Quanti anni hai?");

console.log('age=', age);

let prezzo = 0.21 * km;



if(age < 18){
  prezzo -= (prezzo*20)/100;
  document.getElementById('prezzo_biglietto').innerHTML = "Biglietto Under18: " + prezzo.toFixed(2) + "&euro;";
}
else if (age >= 65) {
  prezzo -= (prezzo*40)/100;
  document.getElementById('prezzo_biglietto').innerHTML = "Biglietto Over65: " + prezzo.toFixed(2) + "&euro;";
}
else {
  document.getElementById('prezzo_biglietto').innerHTML =
  "Biglietto Standard: " + prezzo.toFixed(2) + "&euro;";
}

console.log('il prezzo é ', prezzo.toFixed(2));

document.getElementById('nomecognome').innerHTML = nome;


document.getElementById('anni').innerHTML = age + " anni";

document.getElementById('data').innerHTML = giorno + mese + anno;