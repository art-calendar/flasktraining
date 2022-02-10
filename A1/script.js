// Create list of words to be guessed.
let materials = [
 "gold",
 "bricks",
 "coal",
 "clay",
 "sand"
]
// list images name to be changed and randomized 
var images = [
  'steve.png',
  'steve2.png',
  'steve3.png',
  'steve4.png'
]

// identify what we need to run this program.  Imagine if you were to do hang man verbally, we need to have paper to write down words gussed and so on.
var answer = "";
var guessed = [];
var word_progress = null

// random between 0 and the length of materials list - 1
// then we use the random number to pick the string back out of the array (list)
function random_word(){
  answer = materials[Math.floor(Math.random()*materials.length)]
}

// now we construct the keyboard we can type them all out one at a time. or use a "for loop"
// we can concatanate the string using + or string literal.
// after we manage to generate the string we add it back inside of the div tag with ID 'keyboard'
function keyboard(){
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
    `<button class="btn btn-lg btn-info m-2" id='` + letter + `' onClick="guess('` + letter + `')">` + letter + `</button>`).join("");
  document.getElementById("keyboard").innerHTML = buttonsHTML
}

//  so we take the gussed word and see if its there.  if it is, we push it in if not we leave it blank
function guess(letter_chose){
  guessed.indexOf(letter_chose) === -1 ? guessed.push(letter_chose): null;
  document.getElementById(letter_chose).setAttribute("disabled", true);
  if (answer.indexOf(letter_chose) >= 0){  //if we got more than one correct we enter this cycle.
    guessed_word();
    end()
  } 
}

// in even the word is the same as answer, we print a winning message
function end(){
  if (word_progress === answer){
    document.getElementById("keyboard").innerHTML = "You guessed it right! Riley knows what she is feeling now, congrats!!!"
  }
}

// split the word and change them into _ for display.
// however if letter is correct the _ is removed and letter is used.
function guessed_word(){
  word_progress = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join("");
  document.getElementById("correct_word").innerHTML = word_progress
}

// on restart, reset everything back to 0 or empty (just like grabbing your self a new paper) then we 
// run flipper (image update)
// get new word report keyboard and start guessing again
function restart(){
  mistakes = 0;
  guessed = [];
  flipper();
  random_word();
  keyboard();
  guessed_word()
}

// instead of adding content to html we add attribute
// however we need set Attribuites function blow to actually add multiple attribute.
function flipper(){ 
  var num = Math.floor(Math.random() * images.length);
  setAttributes(document.getElementById('rotateimage'), {'src': images[num], 'width':'300px'});
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// run the following codes.

flipper();
random_word();
keyboard();
guessed_word()