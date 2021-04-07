'use strict';
let username = prompt('what is your name?');
alert( 'Welcome to our website, ' + username + '!' + 'let is play this game');


let score = 0;


question01();


question02();




function question01 ( ) {
  let developer = prompt('Do you think I prefer to be a back-end more than front-end developer?').toLowerCase();

  if (developer === 'yes' || developer === 'y'){
    alert('Nope');
  }
  else if (developer === 'no' || developer === 'n'){
    alert('Yes!');
    score= score+1;
  }
}



//Question #2
function question02() {

  let day = prompt('Do you think I am a morning person more than night person?').toLowerCase();
  if (day === 'yes' || day === 'y'){
    alert('definitely');
    score= score+1;
  }
  else if (day === 'no' || day === 'n'){
    alert('Not really ...');
  }

}






//Question #3
let background = prompt('Do you think I am from a science background?').toLowerCase();
if (background === 'yes' || background === 'y'){
  alert('That is True!');
  score= score+1;
}

else if (background === 'no' || background === 'n'){
  alert('Actually, I am');
}
//Question #4
let blue = prompt('Do you think I prefer black over blue?').toLowerCase();
if (blue === 'yes' || blue === 'y'){
  alert('No, I think black is too dark, I prefer blue.');
}

else if (blue === 'no' || blue === 'n'){
  alert('Blue is my favorate color ... at least most of the time.');
  score= score+1;
}
//Question #5
let book = prompt ('Do you think I prefer books over movies?').toLowerCase();

if (book === 'yes' || book === 'y' ){
  alert('depends on the story, but yes, I usually prefer books');
  score = score+1 ;

}else if( book === 'no' || book === 'n'){
  alert('depends on the story, but No, I usually prefer books');
}

//Question #6
let village = prompt('How much -on a scale from 1 to 20- you guess I want to live in a green village? ');
village=parseInt(village);
let i=0;


for (i=1; village!==17 && i<4 ;i++){
  if (village <= 7){
    village = prompt('This value is too low, Try again. How much -on a scale from 1 to 10- you guess I want to live in a green village? ');
    village=parseInt(village);
  }
  else if( village >14 && village < 21 && village !== 17 ){
    village = prompt('you are close, Try again. How much -on a scale from 1 to 10- you guess I want to live in a green village? ');
    village=parseInt(village);
  }
}

if (village === 17){
  alert('Correct!');
  score = score +1 ;
}
else {
  alert('Nope, the answer is 17');
}

//Question #7
let favpet = ['horse', 'dog', 'squirrel'];
let pet = prompt('Can you guess my favorite animals?').toLocaleLowerCase();
let ispet = false ;
for (i=0; i<3;i++){
  if (pet === favpet[i]){
    ispet = true;
    console.log('1stfor,1stif');
  }
}

for(let j=0; ispet === false && j<5; j++){
  pet=prompt('No, try again. Can you guess one of my favorite animals?');
  for (let k=0; k<3;k++){
    if (pet === favpet[k]){
      ispet = true;
      console.log('2stfor, 2stif');
    }
  }
}
if(ispet === true){
  alert('Yes, I do love: ' + favpet[0] +'s, '+favpet[1]+'s, and '+favpet[2]+'s.');
  score=score+1;
  console.log('3rdif');
}
else{
  alert('Actually, no. I love: '+ favpet[0]+'s, '+favpet[1]+'s, and '+favpet[2]+'s.');
  console.log('else');
}

alert ('Welcome, ' + username + ' You got '+ score + ' out of 7!');

