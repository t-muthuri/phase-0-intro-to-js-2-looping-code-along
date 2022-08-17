// Code your solutions in this file
let cards = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards (cards) {
    const birthday= []
    for (let c = 0; c < cards.length; c++){
        birthday.push (`Thank you, ${cards[c]}, for the wonderful surprise gift!`);
    console.log (`Thank you, ${cards[c]}, for the wonderful surprise gift!`);
    }
    console.log (birthday);
    return birthday;
    /*return ["Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!",];*/
}


function countDown(){

    let count = 10;

    while(count > 0){
        console.log (count);
        count -= 1;
    }

    console.log (count);
}