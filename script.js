// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// global variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var pattern = [8, 2, 4, 3, 7, 6, 5, 4];
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;
var patternLen = pattern.length;
var mistakes;
var mistakesLeft;
var hardmodeActivate;
var record = [];
var position = 0; //keeps track of win array position

function randomPattern(){
  
  let i = 0;
  var newPattern = [];
  
  //fill new array with random numbers
  for (i = 0; i < pattern.length; i++){
    
    newPattern[i] = Math.floor(Math.random() * 8) + 1;
  
  }
 
  return newPattern;
}

var testPattern = randomPattern();

function startGame(){

    pattern = randomPattern();
    playClueSequence();
  
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakes = 0;
    mistakesLeft = 3;
    clueHoldTime = 1000;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
}

function stopGame(){
    gamePlaying = false;
    progress = 0;
    mistakes = 0;
    mistakesLeft = 3;
    guessCounter = 0;
  
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 398,
  4: 462.2,
  5: 350,
  6: 400,
  7: 290,
  8: 300
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    
    //make adjust clue time based on easy vs hard mode
    if(hardmodeActivate == true){
      clueHoldTime -= 25;
    }
    else{
      clueHoldTime -= 20;
    }
    
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations, you won!");
}

function guess(btn){
  let alertMssg = "";
  
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(btn == pattern[guessCounter]){
    if(progress == guessCounter){
      if(progress == patternLen - 1){
        newRecord(1);
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else if(btn != pattern[guessCounter] && mistakes < 3){
    
    mistakes++;
    
    if(document.getElementById("hard").checked){
      hardMode();
    }
    else{
      // alert for number of mistakes left
      if (mistakesLeft >= 0){

        mistakesLeft -= 1;

        alertMssg = "You have " + mistakesLeft + " mistakes left";
        alert(alertMssg);

      }
    }
    
    playClueSequence();
    
  }
  else{
    loseGame();
  }
}

// for hard mode
function hardMode(){
  let mssgAlert = "";

  // alert for number of mistakes left
    if (mistakes == 1){
      
      mssgAlert = "You have 0 mistakes left";
      alert(mssgAlert);
      
    } 
  
    if(mistakes == 2){
      loseGame();
    }
  }

//keep track of wins 
function newRecord(newWin){
  
  var wins;
  
  record[position] = newWin;
  
  wins = record.length;
  
  position++;
  
  return wins;
  
}

//test wins are incremented in record array
var collectwins = newRecord(1);
var sf = newRecord(1);
var tg = newRecord(1);


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
