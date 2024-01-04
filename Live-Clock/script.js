const darkMode = document.getElementById('darkMode');
const text = document.getElementsByTagName('p');

// Enable Dark Mode
darkMode.addEventListener('click', function (e){
  
  if(window.getComputedStyle(e.target).getPropertyValue('background-color')=='rgb(240, 255, 255)'){
    darkMode.innerHTML="Light Mode";
    darkMode.style.backgroundColor="#212121";
    darkMode.style.color="white";
    document.body.style.backgroundColor='rgb(147, 147, 202)';
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = 'black';
    }
    document.getElementById('time').style.color = 'white';
    document.getElementById('clock-body').style.backgroundColor = 'rgb(36, 0, 56)';
  }

  else{
    darkMode.innerHTML="Dark Mode";
    darkMode.style.backgroundColor="azure";
    darkMode.style.color="#212121";
    document.body.style.backgroundColor='rgb(36, 0, 56)';
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = 'white';
    }
    document.getElementById('time').style.color = 'black';
    document.getElementById('clock-body').style.backgroundColor = 'rgb(147, 147, 202)'
  }
});

// Live Time Integration
setInterval(function (params) {
  let myDate = new Date();
  document.getElementById('time').innerHTML = myDate.toLocaleTimeString();
},1000)


