// Write a function that given a string returns whether or not that string contains the letter "H" (True if so, False if not)
// Bonus: Instead of the letter "H", return whether the string contains the word "help" or not
// Double bonus: return whether it contains the letters "h", "e", "l", and "p" in that order unbroken

var string = "This is a cry for help";

function tester(string){
    // Only necessary for Part 2
    var helpstring = "";
    for (var i = 0; i<string.length; i++){

        // // Part 1
        // if (string[i] == "h" ||string[i] == "H"){
        //     return true;
        // }

        // // Part 2
        //     if (string[i] == "h" ||string[i] == "H"){
        //         helpstring = "h";
        //     }
        //     else if (string[i] == "e" && helpstring=="h"){
        //         helpstring = "he";
        //     }
        //     else if (string[i] == "i" && helpstring=="he"){
        //         helpstring = "hel";
        //     }
        //     else if (string[i] == "p" && helpstring=="hel"){
        //         return true;
        //     }

        // Part 3
        // if (string[i] == "h" && string[i+1] == "e" && string[i+2] == "l" && string[i+3] == "p"){
        //     return true;
        // }
        // OR
        // if (string[i] == "h" ||string[i] == "H"){
        //     helpstring = "h";
        // }
        // else if (string[i] == "e" && helpstring=="h"){
        //     helpstring = "he";
        // }
        // else if (string[i] == "i" && helpstring=="he"){
        //     helpstring = "hel";
        // }
        // else if (string[i] == "p" && helpstring=="hel"){
        //     return true;
        // }
    }
    return false;
}

tester(string);
console.log(tester(string));