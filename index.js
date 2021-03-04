// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`Wrapped ${gift} and added a bow!`);
// } 
// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age= 30; age < 40; age++ ) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }
//  const gifts = ["teddy bear", "drone", "doll"];

//  function wrapGifts(gifts){

//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//      debugger;       
//  }
//   return gifts;
// }
// wrapGifts(gifts);
 

const cards = ["Ada", "Brendan", "Ali"];
const events = ["birthday"];

function writeCards(cards){

    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]} for the wonderful ${events} gift!`);
    }
    return cards;
}
writeCards(cards);

// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   } 

// while ([condition]) {
//     [loop body]
//   } 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;  // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;   // the iteration moves INSIDE the body of the loop!
    }
    return gifts;
}
wrapGifts(gifts);

function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  } 

  let countup = 0;
while (countup < 10) {
  console.log(countup++);
} 

for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  } 
  

