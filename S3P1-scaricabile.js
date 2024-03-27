/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


function crazySum (num1,num2) {
let somma = num1 + num2
if (num1 === num2){
    return (somma) * 3
 }else {return somma
}
}
console.log (crazySum (10,10))
console.log (crazySum (20,50))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (num1) {
    if ((num1 >= 20 && num1 <= 100) || (num1 === 400)) {
    return true
    } else return false
   }
   console.log (boundary (8))
   console.log (boundary (25))
   console.log (boundary (400))
   console.log (boundary (401))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (string) {
    return string.split("").reverse("").join("")
}
console.log (reverseString ("patrizia"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (string){
    return string.charAt(0).toUpperCase("") + string.slice ("1")
}
console.log (upperFirst("patrizia"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    const arrayFinale = [];
    for (let i =0; i< n; i++) {
        let random = Math.floor (Math.random ()*10)
        arrayFinale.push (random)
    }
    return arrayFinale
}
console.log (giveMeRandom (15))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2){
    let areaRettangolo = l1*l2
    return areaRettangolo
}
console.log(area(10,12))
console.log (area(12,6))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (num){
    let operazione = num - 19
    if (operazione<19){
        return operazione *3
    }else {return operazione}
}
console.log (crazyDiff(100))
console.log (crazyDiff(25))
console.log (crazyDiff(10))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (string){
    if (string.startsWith ("code")){
        return string
    } else {return "code" + string}
} 

console.log (codify ("codesto"))
console.log (codify ("sta"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (numInt){
    if (numInt % 3 === 0 || numInt % 7 === 0){
        return true
    }else {return false}
}
console.log (check3and7(15))
console.log (check3and7(28))
console.log (check3and7(100))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (string){
    return string.split("").slice (1,-1).join("")
}
console.log (cutString ("patrizia"))
