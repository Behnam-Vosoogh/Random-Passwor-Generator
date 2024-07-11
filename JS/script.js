const passWordBox = document.getElementById("password");
// const lenght = 12;
const upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}/?<>,.~`";
// Function to get a random character from a string
function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}
// Function to generate the password
function passGenerator() {
  let passwordLength = parseInt(document.getElementById("length").value);
  let pass = "";

  // Ensure at least one character from each category
  pass += getRandomChar(upperCase);
  pass += getRandomChar(lowerCase);
  pass += getRandomChar(number);
  pass += getRandomChar(symbols);

  // Fill remaining characters with random selections
  while (pass.length < passwordLength) {
    const randomIndex = Math.floor(Math.random() * 4);
    switch (randomIndex) {
      case 0:
        pass += getRandomChar(upperCase);
        break;
      case 1:
        pass += getRandomChar(lowerCase);
        break;
      case 2:
        pass += getRandomChar(number);
        break;
      case 3:
        pass += getRandomChar(symbols);
        break;
    }
  }

  // Shuffle the password for better randomness
  pass = pass
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  passWordBox.value = pass;
}
const lengthSlider = document.getElementById("length");
lengthSlider.addEventListener("input", () => {
  document.getElementById("lengthValue").textContent = lengthSlider.value;
  passGenerator(); // Generate a new password on slider change
});

// Function to copy the password
async function copyPassword() {
  try {
    await navigator.clipboard.writeText(passWordBox.value);
    alert("Password copied to clipboard!"); // Optional: Notify user
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Event listener for the copy image
const copyIcon = document.querySelector(".display img"); // Get the image element
copyIcon.addEventListener("click", copyPassword); // Call copyPassword on click
