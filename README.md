js-biglietto-treno
===
consegna: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


## Passaggi: 
1. Chiedere per poi salvare in una variabile i chilometri che l'utente ha intenzione di percorrere
2. Chiedere con un prompt l'etá dell'utente per poi salvarla in una variabile.

3. creare una variabile che calcola il prezzo base del biglietto: 0.21 &euro; al Km 


4. Se l'utente é minorenne applicare al calcolo del prezzo uno sconto del -20%

5. Se l'utente é invece un over 65 applicare al calcolo del prezzo uno sconto del 40%.

6. Stampare il risulatato a schermo 

## punto n°  1

```

  const km = prompt("Ciao, quanti KM hai intenzione di percorrere?");

```
## punto n°  2

```
const age = prompt("Quanti anni hai?");

```

## punto n°  3

```
let prezzo = 0.21 * age;

```

## punto n°  4-5-6
- in base all'etá il messaggio di output sullo schermo sará differente

```

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
```