function randomColor() {
  return Math.floor(Math.random()*255);
}

function colorChange() {
  let r=randomColor();
  let g=randomColor();
  let b=randomColor();
  return (`rgb(${r},${g},${b})`);
}

document.querySelector('button').addEventListener('click', () => {
  console.log(colorChange());
  document.getElementById('box').style.backgroundColor = colorChange();
});