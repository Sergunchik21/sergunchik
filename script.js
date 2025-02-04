let current = 0;
const myButton = document.getElementById('myButton');
myButton.addEventListener("click", () => {
switch (current){
case 0:
    myButton.style.backgroundColor = "red";
    myButton.style.color = "purple";
    break;
case 1:
    myButton.style.backgroundColor = "black";
    myButton.style.color = "yellow";
    break;
    case 2:
      myButton.style.backgroundColor = "black";
      myButton.style.color = "green";
      break;
    default:
      current = 0;
  }
  current++;
  if (current > 2) {
    current = 0;
  }
});
const square = document.querySelector(".square");
const changeStyleButton = document.getElementById("changeStyleButton");
const styles = ["style1", "style2", "style3"];
let currentStyleIndex = 0;

changeStyleButton.addEventListener("click", () => {
  // Удаляем текущий класс
  square.classList.remove(styles[currentStyleIndex]);

  // Увеличиваем индекс
  currentStyleIndex++;

  // Если индекс вышел за границы массива, возвращаем его к 0
  if (currentStyleIndex >= styles.length) {
    currentStyleIndex = 0;
  }

  // Добавляем новый класс
  square.classList.add(styles[currentStyleIndex]);
});
