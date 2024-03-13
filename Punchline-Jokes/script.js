let newJoke = document.querySelector("#newJoke");

async function getJoke() {
  try {
    let response = await fetch("jokes.json");
    let data = await response.json();
    randomJoke();

    function randomJoke() {
      let random = Math.ceil(Math.random() * 406);
      processData(random);
    }

    function processData(random) {
      let type = document.getElementById("jokeType").value;

      if (type != "any") {
        if (data[random].type == type) {
          document.getElementById("setup").innerHTML = data[random].setup;
          document.getElementById("punchline").innerHTML =
            data[random].punchline;
        } else {
          randomJoke();
        }
      } else {
        document.getElementById("setup").innerHTML = data[random].setup;
        document.getElementById("punchline").innerHTML = data[random].punchline;
      }
    }
  } catch (error) {
    console.error("Failed to fetch joke:", error);
  }
}

newJoke.addEventListener("click", () => {
  getJoke();
});
