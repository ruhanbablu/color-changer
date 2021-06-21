const color = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("button");
const colors = document.getElementsByClassName("color");

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
   
    document.body.style.backgroundColor = color[randomNumber];
    colors.textContent = color[randomNumber];

  });

  console.log(button);

  function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
  }

