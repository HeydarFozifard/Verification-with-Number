//vars
let randomBtn = document.getElementById("make_random_btn");
let randomNumber = document.getElementById("random_number");
let input = document.getElementById("get_input");
let form = document.getElementById("form");

let makeRandomNumber;

randomBtn.addEventListener("click", () => {
    makeRandomNumber = Math.floor(Math.random() * 9000) + 1000;
    randomNumber.innerHTML = makeRandomNumber;
});
let number;

input.addEventListener("keyup", (e) => {
    if (makeRandomNumber == undefined) {
        alert("please first click on the button to make a number");
    } else {
        number = e.target.value;
    }
});

form.addEventListener("submit", () => {
    if (number == makeRandomNumber) {
        alert("Verification with Number was successfully");

        input.value = "";
        randomNumber.textContent = "";
    } else {
        alert("the number you had written was wrong try again, please");

        setTimeout(() => {
            location.reload();
        }, 2000);
    }
});
