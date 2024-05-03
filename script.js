var numbertofind = 0;
var attemps = 0;

function refresh() {
    attemps = 0;
    numbertofind = parseInt(Math.random() * 100);
    console.log(numbertofind);
}

function checkNumber(number) {

    var bet = document.getElementById('bet').value;

    if( bet > 100 || bet < 1 ) {
        alert('Aposta invalida😒');
        return;
}
if(bet > numbertofind){
    attemps++;
    alert('o numero para ser encontrado e menor🤞');
}else if( bet < numbertofind ) {
    attemps++;
    alert('o numero para ser encontrado e maior✌️');
}
else{
    alert('Parabens, voce acertou em '+ attemps +' tentativas😎🥳');
    refresh();
}
}
refresh();