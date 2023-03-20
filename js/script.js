

const km = prompt("Ciao, quanti KM hai intenzione di percorrere?");

console.log('km da percorrere', km);

const age = prompt("Quanti anni hai?");

console.log('age=', age);

let prezzo = 0.21 * km;



if(age < 18){
  prezzo -= (prezzo*20)/100;
  document.getElementById('prezzo_biglietto').innerHTML = "Prezzo Under18: " + prezzo.toFixed(2) + "&euro;";
}
else if (age >= 65) {
  prezzo -= (prezzo*40)/100;
  document.getElementById('prezzo_biglietto').innerHTML = "Prezzo Over65: " + prezzo.toFixed(2) + "&euro;";
}
else {
  document.getElementById('prezzo_biglietto').innerHTML =
  "Prezzo Standard: " + prezzo.toFixed(2) + "&euro;";
}

console.log('il prezzo é ', prezzo.toFixed(2));