const userChoice = document.getElementById("user");
const check = document.getElementById("check");
const displayField = document.getElementById("displayField");
let computer;
computer = Math.floor(Math.random() * 10);
check.addEventListener("click", () => {
  console.log(computer);
  let user = Number(userChoice.value);

  if (computer > user) {
    displayField.textContent = "Chooses greater Number";
  } else if (computer < user) {
    displayField.textContent = "Choose Lesser Number";
  }
  if (computer === user) {
    displayField.textContent = "Gusses Matched";
    computer = Math.floor(Math.random() * 10);
  }
});
