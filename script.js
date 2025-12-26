const slider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const result = document.getElementById("result");

lengthValue.textContent = slider.value;
slider.oninput = () => lengthValue.textContent = slider.value;

document.getElementById("generateBtn").onclick = generateNickname;
document.getElementById("copyBtn").onclick = copyNickname;

function generateNickname() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const game = document.getElementById("gameSelect").value;
  const length = parseInt(slider.value);
  const emojiEnabled = document.getElementById("emojiToggle").checked;

  if (!name) {
    alert("Enter your name first");
    return;
  }

  const clean = name.replace(/[^a-z]/g, "");

  // Game-specific styles
  const styles = {
    ff: ["x", "dark", "ff", "op", "killer", "sniper", "pro" , "hunter", "yourdad", "ninja", "hacker", "don'tMess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster", "AK"],
    pubg: ["killer", "sniper", "pubg", "pro", "legend", "x", "dark", "hunter", "yourdad", "ninja", "hacker", "don'tMess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster", "AK"],
    mlbb: ["hero", "legend", "ml", "king", "knight", "dark", "hunter", "yourdad", "ninja", "hacker", "don'tMess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster"],
    coc: ["chief", "clan", "war", "coc", "x", "hunter", "yourdad", "blade", "master", "death", "blademaster"],
  };

  // Game-specific emojis
  const emojis = {
    ff: ["🔥", "💀", "⚡","⚔️", "🛡️", "☠", "👿", "🏴‍☠️", "🏴", "🏳", "❌", "💯"],
    pubg: ["🎯", "💣","🔥", "💀", "❌", "💯", "☠", "🏴‍☠️"],
    mlbb: ["⚔️", "🛡️", "👑", "❌", "💯", "☠", "🏴‍☠️", "🏴", "🏳"],
    coc: ["🏰", "🪓", "🔥","⚔️", "🛡️", "👑", "🎯", "💣", "💀", "⛏", "⚒", "🛠", "🔧", "🔨", "🏴‍☠️", "🏴", "🏳"]
  };

  const symbols = ["", "ツ", "彡", "乂"];
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  let nickname =
    pick(symbols) +
    pick(styles[game]) +
    clean +
    pick(symbols);

  // Adjust length BEFORE emoji
  if (nickname.length > length) nickname = nickname.slice(0, length);
  while (nickname.length < length - (emojiEnabled ? 2 : 0)) nickname += "x";

  // Add emoji if enabled
  if (emojiEnabled) nickname += pick(emojis[game]);

  result.textContent = nickname;
}

function copyNickname() {
  if (!result.textContent) return;
  navigator.clipboard.writeText(result.textContent);
  alert("Nickname copied!");
}

