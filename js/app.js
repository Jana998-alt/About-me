'use strict';
let username = prompt("what is your name?")
alert('Welcome to our website, ' + username + "!"+ "let's play this game")

let developer = prompt("Do you think I prefer to be a back-end more than front-end developer? ").toLocaleLowerCase()

let score = 0
if (developer === "yes" || developer === "y"){
    alert("Nope");
}

else if (developer === "no" || developer === "n"){
    alert("Yes!")
    score= score++;
}

let day = prompt("Do you think I am a morning person more than night person?").toLowerCase()
    if (day === "yes" || day === "y"){
        alert("definitely")
        score= score++;
    }
    
    else if (day === "no" || day === "n"){
        alert("Not really ...");
    }
    
let background = prompt("Do you think I am from a science background?").toLowerCase()
if (background === "yes" || background === "y"){
    alert("That is True!")
    score= score++;
}

else if (background === "no" || background === "n"){
    alert("Actually, I am");
}

    let blue = prompt("Do you think I prefer black over blue?").toLowerCase()
if (blue === "yes" || blue === "y"){
    alert("No, I think black is too dark, I prefer blue.");
}

else if (blue === "no" || blue === "n"){
    alert("Blue is my favorate color ... at least most of the time.")
    score= score++;
}

let book = prompt ("Do you think I prefer books over movies?").toLowerCase()
if (book === "yes" || book === "y" || book === "no" || book === "n"){
    alert("depends on the story, but yes, I usually prefer books")
    score= score++;
}
else if (book === "no" || book === "n"){
    alert("depends on the story, but No, I usually prefer books")
}

alert ("Welcome, " + username + " You got "+ score + " out of 5!");
