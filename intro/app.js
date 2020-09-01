// CMDER
// TERMINAL
// CONSOLE

/**
 * Change Directory:
 * cd
 * 
 * Clear:
 * Win: cls
 * Mac: clear
 */

// imports
var myMath = require('./myMath');

/**
 * DOM
 * document
 * window
 */

function test() {
    var name = "Lety";
    var age = 27;
    console.log(name);

    if (age < 60) {
        console.log("You are still young");
    } else {
        console.log("Sorry, you are getting old");
    }

    // print number from 3 to 12, except the 7

    for (let i = 3; i <= 12; i++) {
        if (i != 7) {
            console.log(i);
        }
    }

    //arrays
    var names = [];
    names.push('Luis');
    names.push('Kenny');
    names.push('Ebbonai');
    names.push('Desir');
    names.push('Lety');

    console.log(names);

    //print the names in reverse order
    console.log(names.reverse());


    for (let j = names.length - 1; j >= 0; j--) {
        console.log(names[j]);
    }
}

function init() {
    console.log("Execute..!! NodeJs");

    // test();
    myMath.test();

    var res = myMath.sum(27, 53);
    console.log("Sum: " + res);

    var sub = myMath.subtract(53, 27);
    console.log("Subtract: " + sub);

    var mult = myMath.multiply(27, 53);
    console.log("Multiply: " + mult);

    var bad = myMath.divide(1, 0);
    console.log("Bad: " + bad);

    var good = myMath.divide(123, 3);
    console.log("Good: " + good);

    var s1 = myMath.smaller(35, 72);
    console.log("Smaller: " + s1);

    var g1 = myMath.greater(34, 78, 2);
    console.log("Greater: " + g1); //78

    var g2 = myMath.greater(-9, 0, 200);
    console.log("Greater: " + g2); //200 

    var even = myMath.isEven(264);
    console.log("Even: " + even); //True

    var odd = myMath.isEven(777);
    console.log("Odd: " + odd); //False
}

init();