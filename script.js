<<<<<<< HEAD
let display = document.getElementById("display");

function appendValue(val) {
  if (display.value === "0") display.value = "";
  display.value += val;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function appendSign() {
  if (display.value !== "0") {
    display.value = (parseFloat(display.value) * -1).toString();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Error");
  }
=======
let display = document.getElementById("display");

function appendValue(val) {
  if (display.value === "0") display.value = "";
  display.value += val;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function appendSign() {
  if (display.value !== "0") {
    display.value = (parseFloat(display.value) * -1).toString();
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Error");
  }
>>>>>>> fa44aebae3dd97e55cd7e2b04dfa5689e91ae9b4
}