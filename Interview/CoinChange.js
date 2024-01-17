var notes = [1, 2, 5, 10, 20, 50, 100, 500, 2000];
var amount = 590;
var countOfCoins = 0;
const newArray = [];

const changeCoins = (notes, amount) => {
    notes.reverse();
    for (var i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            while (amount >= notes[i]) {
                countOfCoins++;
                newArray.push(notes[i]);
                amount -= notes[i];
            }
        }
    }
    return countOfCoins;
}

//print the notes 
const printNotes = (newArray) => {
    console.log("the no of notes :",changeCoins(notes, amount)); //call the change coins function which return the count of coins
    for (var i = 0; i < newArray.length; i++) {   //recieve the result from newArray
        console.log(newArray[i]);
    }
}
printNotes(newArray);

// output
// the no of notes : 4
// 500
// 50
// 20
// 20