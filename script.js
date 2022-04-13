// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const countdownElement = document.getElementById("countdown");
const time = 4;
const timeElement = document.getElementById("timer");
const backgroundColors = ['#38182F', '#2F394D', '#D1B490', '#291711', '#474b24', 
                          '#333333', '#2D3047'];

// global variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
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
let seconds = time * 60;
var interval;

//function to change background
function backgroundChange(){
  var getColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  document.body.style.backgroundColor = getColor;
  
}

// timer function
function startTimer(){
  const minutes = Math.floor(seconds / 60);
  let remainingSecs = seconds % 60;
  remainingSecs = remainingSecs < 10 ? '0' + remainingSecs:remainingSecs;
  
  if(seconds == 240){
    timeElement.innerHTML = `${minutes}:00`;
  }
  else{
    timeElement.innerHTML = `${minutes}:${remainingSecs}`;
  }
  
  if(gamePlaying == true && seconds == 0){
    
    loseGame();
  }
  
  seconds--;
}


// generate random pattern
function randomPattern() {
  let i = 0;
  var newPattern = [];

  //fill new array with random numbers
  for (i = 0; i < pattern.length; i++) {
    newPattern[i] = Math.floor(Math.random() * 8) + 1;
  }

  return newPattern;
}

var testPattern = randomPattern();

// game functions
function startGame() {
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
  
  //make timer visible
  timeElement.classList.remove("hidetimer");
  
  interval = setInterval(startTimer, 1000);
}

function stopGame() {
  
  // stop and reset timer
  clearInterval(interval);
  seconds = time * 60;
  
  // hide timer
  timeElement.classList.add("hidetimer");
  
  gamePlaying = false;
  progress = 0;
  mistakes = 0;
  mistakesLeft = 3;
  guessCounter = 0;

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

var audio1 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/zapsplat_cartoon_arrow_bow_release_whoosh_past_hit_target_with_twang_002_18119.mp3?v=1649820399868');
var audio2 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/ES_Bell%20Ring%20Desk%201%20-%20SFX%20Producer.mp3?v=1648802457277');
var audio3 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/zapsplat_cartoon_anime_power_up_high_pitched_laser_77707.mp3?v=1649820305339');
var audio4 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/mixkit-arcade-retro-game-over-213.wav?v=1648802584720');
var audio5 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/mixkit-fast-small-sweep-transition-166.wav?v=1648802587048');
var audio6 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/mixkit-cinematic-transition-swoosh-heartbeat-trailer-488.wav?v=1648802639557');
var audio7 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/zapsplat_cartoon_anime_magical_laser_burst_77706.mp3?v=1649819634058');
var audio8 = new Audio('https://cdn.glitch.global/858877f6-4b70-4777-a945-87cf580bf1be/zapsplat_food_plastic_packet_salad_bowl_short_shake_salad_contents_inside_001_82874.mp3?v=1649819636922');

// Sound Synthesis Functions
const freqMap = {
  1: 360,
  2: 329.6,
  3: 398,
  4: 462.2,
  5: 350,
  6: 400,
  7: 290,
  8: 300
};

//play custom audio
function playSound(btn){
  
  if(btn == 1){
    audio1.play();
  }
  else if(btn == 2){
    audio2.play();
  }
  else if (btn == 3){
    audio3.play();
  }
  else if (btn == 4){
    audio4.play();
  }
  else if (btn == 5){
    audio5.play();
  }
  else if (btn == 6){
    audio6.play();
  }
  else if (btn == 7){
    audio7.play();
  }
  else{
    audio8.play();
  }
}


//**possible features**
// - user can change color of game
// - add background music to game


// function playTone(btn, len) {
  
//   //sequence of frequencies
  
//   o.frequency.value = freqMap[btn];
 

  
//   g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
//   context.resume();
//   tonePlaying = true;
//   setTimeout(function () {
//     stopTone();
//   }, len);
// }
// function startTone(btn) {
//   if (!tonePlaying) {
//     context.resume();
    
//     o.frequency.value = freqMap[btn];
    
//     g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
//     context.resume();
//     tonePlaying = true;
//   }
// }

//stop audio
function stopTone() {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;
  audio3.pause();
  audio3.currentTime = 0;
  audio4.pause();
  audio4.currentTime = 0;
  audio5.pause();
  audio5.currentTime = 0;
  audio6.pause();
  audio6.currentTime = 0;
  audio7.pause();
  audio7.currentTime = 0;
  audio8.pause();
  audio8.currentTime = 0;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue

    //adjust clue time based on easy vs hard mode
    if (hardmodeActivate == true) {
      clueHoldTime -= 27;
    } else {
      clueHoldTime -= 14;
    }

    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations, you won!");
}

function guess(btn) {
  let alertMssg = "";

  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // add game logic here
  if (btn == pattern[guessCounter]) {
    if (progress == guessCounter) {
      if (progress == patternLen - 1) {
        newRecord(1);
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else if (btn != pattern[guessCounter] && mistakes < 3) {
    mistakes++;

    if (document.getElementById("hard").checked) {
      hardMode();
    } else {
      // alert for number of mistakes left
      if (mistakesLeft >= 0) {
        mistakesLeft -= 1;

        alertMssg = "You have " + mistakesLeft + " mistakes left";
        alert(alertMssg);
      }
    }

    playClueSequence();
  } else {
    loseGame();
  }
}

// for hard mode
function hardMode() {
  let mssgAlert = "";

  // alert for number of mistakes left
  if (mistakes == 1) {
    mssgAlert = "You have 0 mistakes left";
    alert(mssgAlert);
  }

  if (mistakes == 2) {
    loseGame();
  }
}

//keep track of wins
function newRecord(newWin) {
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
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
