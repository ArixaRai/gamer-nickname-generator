const symbols = ["×", "ツ", "亗", "么", "々", "彡", "★", "☠"];
const prefixes = ["Dark", "Pro", "Ghost", "King", "Shadow", "Fire"];
const suffixes = ["X", "OP", "YT", "777", "69", "99"];

function generateName() {
  let base = document.getElementById("baseName").value;
  let game = document.getElementById("game").value;

  if (base === "") {
    base = prefixes[Math.floor(Math.random() * prefixes.length)];
  }

  let symbol = symbols[Math.floor(Math.random() * symbols.length)];
  let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  let number = Math.floor(Math.random() * 900 + 100);

  let nickname = "";

  if (game === "freefire") {
    nickname = `${symbol}${base}${suffix}${number}`;
  } 
  else if (game === "pubg") {
    nickname = `${base}${symbol}${number}`;
  } 
  else if (game === "mlbb") {
    nickname = `${base}${suffix}${symbol}`;
  } 
  else if (game === "coc") {
    nickname = `${symbol}${base}_${number}`;
  }

  document.getElementById("result").innerText = nickname;
}