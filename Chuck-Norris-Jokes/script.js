
  let refresh = document.querySelector('#newJoke');

  async function getJoke() {
    try {
      let response = await fetch("https://api.chucknorris.io/jokes/random");
      let data = await response.json(); 
      document.getElementById('textBox').value = data.value;
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  }

  refresh.addEventListener('click', () => {
    console.log('Hi');
    getJoke();
  });
