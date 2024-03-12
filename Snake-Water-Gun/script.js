function choiceGenerator() {
  const choice = Math.ceil(Math.random() * 3);
  if (choice == 1) {
    return "snake";
  } else if (choice == 2) {
    return "water";
  } else {
    return "gun";
  }
}

function decideWinner(user, computer) {
  if (user == "snake") {
    if (computer == "snake") {
      return "both";
    } else if (computer == "water") {
      return "user";
    } else {
      return "computer";
    }
  } else if (user == "water") {
    if (computer == "water") {
      return "both";
    } else if (computer == "gun") {
      return "user";
    } else {
      return "computer";
    }
  } else {
    if (computer == "gun") {
      return "both";
    } else if (computer == "water") {
      return "computer";
    } else {
      return "user";
    }
  }
}

let buttons = document.querySelectorAll("#user-choice button");

let userScore = 0;
document.querySelector("#user-score").innerHTML = userScore;

let computerScore = 0;
document.querySelector("#computer-score").innerHTML = computerScore;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let computer = choiceGenerator();
    let winner = decideWinner(this.id, computer);
    if (winner === "user") {
      userScore++; // Increment user score
      this.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
      document.querySelectorAll(`#${computer}`)[1].style.backgroundColor =
        "rgba(255, 0, 0, 0.5)";
      //Reset the background color after 1 second
      setTimeout(() => {
        this.style.backgroundColor = "";
        document.querySelectorAll(`#${computer}`)[1].style.backgroundColor = "";
      }, 700);
    } else if (winner === "computer") {
      computerScore++; // Increment computer score
      this.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      document.querySelectorAll(`#${computer}`)[1].style.backgroundColor =
        "rgba(0, 255, 0, 0.5)";
      setTimeout(() => {
        this.style.backgroundColor = "";
        document.querySelectorAll(`#${computer}`)[1].style.backgroundColor = "";
      }, 700);
    } else {
      userScore++;
      computerScore++;
      this.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
      document.querySelectorAll(`#${computer}`)[1].style.backgroundColor =
        "rgba(0, 0, 255, 0.5)";
      setTimeout(() => {
        this.style.backgroundColor = "";
        document.querySelectorAll(`#${computer}`)[1].style.backgroundColor = "";
      }, 700);
    }

    // Update the score
    document.querySelector("#user-score").textContent = userScore;
    document.querySelector("#computer-score").textContent = computerScore;
  });
});

document.querySelector("#restart").addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  document.querySelector("#user-score").textContent = userScore;
  document.querySelector("#computer-score").textContent = computerScore;
});
