let button = document.querySelector("#discoBtn");
function createLight(height) {
  let newLight = document.createElement("div");
  newLight.style.height = height;
  newLight.style.width = "100%";
  newLight.style.margin = "1px";
  newLight.style.backgroundColor = colorChange();
  newLight.className = "discoLight";
  document.body.appendChild(newLight);
}

function randomColor() {
  return Math.floor(Math.random() * 255);
}

function colorChange() {
  let r = randomColor();
  let g = randomColor();
  let b = randomColor();
  return `rgb(${r},${g},${b})`;
}
button.addEventListener("click", () => createLight("20px"));
setInterval(function() {
  // Select all elements with the class 'discoLight'
  const lights = document.querySelectorAll('.discoLight');

  // Loop through each element and change its background color
  lights.forEach(function(light) {
    light.style.backgroundColor = colorChange();
  });
}, 1000); // Execute every 1000 milliseconds
