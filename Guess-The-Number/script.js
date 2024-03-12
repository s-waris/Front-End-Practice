let guessNumber;
let chances = 8;
let number=Math.floor(Math.random()*100);

document.querySelector('#startButton').addEventListener('click', () => {
  chances = 8;
  number=Math.floor(Math.random()*100);
  var chancesRemaining = chances+" chances remaining";
  document.querySelector('#chancesRemaining').innerHTML=chancesRemaining;
  document.querySelector('#guesses').value="";
  document.querySelector('#feedback').value = "";
  document.querySelector('#guessInput').value = "";
});

  document.querySelector('#submitGuess').addEventListener('click', () => {
    --chances;
    if (chances<0) {
      document.querySelector('#feedback').value = "";
      document.querySelector('#guesses').value="";
      alert("Start again!");
    }
    else{
      var lastGuesses = document.querySelector('#guesses').value;
      var chancesRemaining = chances+" chances remaining";
      guessNumber=(document.querySelector('#guessInput').value);
      
      if(guessNumber==number){
        document.querySelector('#feedback').value = "You Got it Right";
        document.querySelector('#chancesRemaining').innerHTML=chancesRemaining;
      }
      else if(guessNumber<number){
        document.querySelector('#feedback').value = "A bit higher";
        lastGuesses=lastGuesses+guessNumber+", ";
        document.querySelector('#guesses').value=lastGuesses;
        document.querySelector('#chancesRemaining').innerHTML=chancesRemaining;
      }
      else{
        document.querySelector('#feedback').value = "A bit lower";
        lastGuesses=lastGuesses+guessNumber+", ";
        document.querySelector('#guesses').value=lastGuesses;
        document.querySelector('#chancesRemaining').innerHTML=chancesRemaining;
      }
    }
  });

