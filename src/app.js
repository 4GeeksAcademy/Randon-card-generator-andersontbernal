import "./style.css";

window.onload = () => {
  const card = document.querySelector(".card");
  const number = card.querySelector(".number");

  const suit = generateRandomSuit();
  const value = generateRandomNumber();

  card.classList.add(suit);
  number.textContent = value;
};

const generateRandomNumber = () => {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const generateRandomSuit = () => {
  const suits = ["diamond", "spade", "heart", "club"];
  return suits[Math.floor(Math.random() * suits.length)];
};
