/*
JSnack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
alert('JSnack 1 : L\'utente inserisce due numeri in successione, il software stampa il maggiore.');

var numero1 = parseInt( prompt('Inserisci un numero') );
var numero2 = parseInt( prompt('Inserisci un altro numero') );

if (numero1 > numero2) {
  alert(numero1 + ' E\' piu\' grande di ' + numero2);
}
else if (numero1 < numero2) {
  alert(numero2 + ' E\' piu\' grande di ' + numero1);
}
else {
  alert('I 2 numeri sono uguali!');
}
/*
JSnack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.
*/
alert('JSnack 2 : L\'utente inserisce due parole in successione, il software stampa una stringa contenente prima la parola piu\' corta, uno spazio e poi la parola piu\' lunga.');

var parola1 = prompt('Inserisci una parola');
var parola2 = prompt('Inserisci un\' altra parola');


if (parola1.length > parola2.length) {
  alert(parola2 + ' ' + parola1);
}
else if (parola1.length  < parola2.length) {
  alert(parola1 + ' ' + parola2);
}
else {
  alert('Le parole sono lunghe uguali.');
}
/*
JSnack 3
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma con il for.
*/
alert('JSnack 3 : Il software chiede 5 volte di inserire un numero, il programma stampa la somma di tutti i numeri inseriti.');

var somma = 0;
var num = 0;

for (var i = 0; i < 5; i++) {
  num = parseInt( prompt('Inserisci un numero.') );
  somma = somma + num;
}

alert('La somma è : ' + somma);
/*
JSnack 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
Chiedi all’utente il suo nome
Comunicagli se può partecipare o no alla festa.
*/
alert('JSnack 4 : Il software chiede all\'utente il nome e verifica se è invitato alla festa.');

lista = ['paolo' , 'fabio' , 'lorenzo'];
invito = false;

user = prompt('Come ti chiami ?').toLowerCase().trim();

for (var i = 0; i < lista.length; i++) {
  if (user == lista[i]) {
    invito = true;
  }
}

if (invito) {
  alert('Complimenti, sei stato invitato alla festa !')
}
else {
  alert('Mi dspiace, non sei stato invitato.')
}

/*
JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero
Se è dispari inseriscilo nell’array
*/
alert('JSnack 5 : Il software chiede sei volte di inserire un numero e colleziona quelli dispari.')

var totale = [];
var numero = 0;

for (var i = 0; i < 6; i++) {
  numero = parseInt( prompt('Inserisci un numero.') );
  if (numero % 2 != 0) {
    totale.push(numero);
  }
}

alert('I numeri dispari inseriti sono : ' + totale);
