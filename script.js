const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generateNickname() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const length = parseInt(lengthSlider.value);

  if (!nameInput) {
    alert("Please enter your name!");
    return;
  }

  const cleanName = nameInput
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  const prefixes = ["", "x", "pro", "dark", "neo", "its"];
  const suffixes = ["", "x", "z", "yt", "op", "ff", "ml"];
  const symbols = ["", "", "ツ", "彡", "乂"];

  let base =
    prefixes[Math.floor(Math.random() * prefixes.length)] +
    cleanName +
    suffixes[Math.floor(Math.random() * suffixes.length)];

  let nickname =
    symbols[Math.floor(Math.random() * symbols.length)] +
    base +
    symbols[Math.floor(Math.random() * symbols.length)];

  // Adjust to slider length
  if (nickname.length > length) {
    nickname = nickname.slice(0, length);
  }

  if (nickname.length < length) {
    nickname += "x".repeat(length - nickname.length);
  }

  document.getElementById("result").textContent = nickname;
}
