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
    ff: ["x", "dark", "ff", "op", "killer", "sniper", "pro" , "hunter", "yourdad", "ninja", "hacker", "don'tmess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster", "AK", "devil", "sin", "sinner", "insane" ,"theripper", "ripper", "Zyn", "Rex", "Vox", "Kyn", "Ace", "Neo", "Ryze", "Blitz", "Hex", "Void", "Nyx", "Ash", "Ruin", "Grim", "Byte", "Glitch", "Node", "Code", "Flux", "Drak", "Odin", "Loki", "Ares", "Hades", "Fen", "Kiro", "Zelo", "Nox", "Izen", "Veno", "Taro", "Zenith", "Ravex", "Kryzen", "Vortex", "Axiom", "Striker", "Blaze", "Phantom", "levi", "ripper", "Noctyx", "Obliv", "ShadowX", "Nightfall", "Twilight", "Grimzor", "Darkryn", "ByteLord", "Neural", "CodeX", "Glitcher", "Techryn", "Cyberix", "Drakon", "Valryn", "Aether", "Mythos", "Runeblade", "Stormveil", "Zerion", "Kairox", "Velon", "Izenor", "Nexira", "Solrex", "Spartax", "CaesarX", "NeoNapoleon", "AttilaV2", "GenghisFX", "DraculaVoid", "Tamerlane", "Dracula", "Genghis", "Attila", "Caesar", "Alexander", "Nero", "Bismarck", "Cortez", "Alexndr", "Ner0", "hokage", "solosaint", "ShakaRage", "uchiha", "IvanFX", "CorTezX", "Iron", "VladX", "RagnarFX", "Chernob", "M0rdred", "DraveN", "Lil1th", "ApepX", "Kh4os", "B4lor", "Medu5a", "Hades", "Ares", "Thor", "Loki", "Odin", "Anubis", "Fenrir", "Kratos", "Raijin", "LolNo", "BigOops", "RageQuit", "EZ4Me", "UwUOwned", "CryMore", "Knight", "L0lWut", "SussyBaka", "NPC_Feed", "SpawnCamper", "EZClap", "U_crying", "GitRekt", "NoobSlayer", "Slayer", "EZPZ", "U_Mad", "SaltLord", "TryHard"],
    pubg: ["killer", "sniper", "pubg", "pro", "legend", "x", "dark", "hunter", "yourdad", "ninja", "hacker", "don'tmess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster", "AK", "devil", "sin", "sinner", "insane" ,"theripper", "ripper", "Zyn", "Rex", "Vox", "Kyn", "Ace", "Neo", "Ryze", "Blitz", "Hex", "Void", "Nyx", "Ash", "Ruin", "Grim", "Byte", "Glitch", "Node", "Code", "Flux", "Drak", "Odin", "Loki", "Ares", "Hades", "Fen", "Kiro", "Zelo", "Nox", "Izen", "Veno", "Taro", "Zenith", "Ravex", "Kryzen", "Vortex", "Axiom", "Striker", "Blaze", "Phantom", "levi", "ripper", "Noctyx", "Obliv", "ShadowX", "Nightfall", "Twilight", "Grimzor", "Darkryn", "ByteLord", "Neural", "CodeX", "Glitcher", "Techryn", "Cyberix", "Drakon", "Valryn", "Aether", "Mythos", "Runeblade", "Stormveil", "Zerion", "Kairox", "Velon", "Izenor", "Nexira", "Solrex", "Spartax", "CaesarX", "NeoNapoleon", "AttilaV2", "GenghisFX", "DraculaVoid", "Tamerlane", "Dracula", "Genghis", "Attila", "Caesar", "Alexander", "Nero", "Bismarck", "Cortez", "Alexndr", "HanniX", "Ner0", "hokage", "solosaint", "ShakaRage", "uchiha", "IvanFX", "CorTezX", "Iron", "VladX", "RagnarFX", "Chernob", "M0rdred", "DraveN", "Lil1th", "ApepX", "Kh4os", "B4lor", "Medu5a", "Hades", "Ares", "Thor", "Loki", "Odin", "Anubis", "Fenrir", "Kratos", "Raijin", "LolNo", "BigOops", "RageQuit", "EZ4Me", "UwUOwned", "CryMore", "Knight", "L0lWut", "SussyBaka", "NPC_Feed", "SpawnCamper", "EZClap", "U_crying", "GitRekt", "NoobSlayer", "Slayer", "EZPZ", "U_Mad", "SaltLord", "TryHard"],
    mlbb: ["hero", "legend", "ml", "king", "knight", "dark", "hunter", "yourdad", "ninja", "hacker", "don'tmess", "blade", "master", "error", "terror", "RunOrDie", "death", "blademaster", "devil", "sin", "sinner", "insane" ,"theripper", "ripper", "Zyn", "Rex", "Vox", "Kyn", "Ace", "Neo", "Ryze", "Blitz", "Hex", "Void", "Nyx", "Ash", "Ruin", "Grim", "Byte", "Glitch", "Node", "Code", "Flux", "Drak", "Odin", "Loki", "Ares", "Hades", "Fen", "Kiro", "Zelo", "Nox", "Izen", "Veno", "Taro", "Zenith", "Ravex", "Kryzen", "Vortex", "Axiom", "Striker", "Blaze", "Phantom", "levi", "ripper", "Noctyx", "Obliv", "ShadowX", "Nightfall", "Twilight", "Grimzor", "Darkryn", "ByteLord", "Neural", "CodeX", "Glitcher", "Techryn", "Cyberix", "Drakon", "Valryn", "Aether", "Mythos", "Runeblade", "Stormveil", "Zerion", "Kairox", "Velon", "Izenor", "Nexira", "Solrex", "Spartax", "CaesarX", "NeoNapoleon", "AttilaV2", "GenghisFX", "DraculaVoid", "Tamerlane", "Dracula", "Genghis", "Attila", "Caesar", "Alexander", "Nero", "Bismarck", "Cortez", "Alexndr", "HanniX", "Ner0", "hokage", "solosaint", "ShakaRage", "uchiha", "IvanFX", "CorTezX", "Iron", "VladX", "RagnarFX", "Chernob", "M0rdred", "DraveN", "Lil1th", "ApepX", "Kh4os", "B4lor", "Medu5a", "Hades", "Ares", "Thor", "Loki", "Odin", "Anubis", "Fenrir", "Kratos", "Raijin", "LolNo", "BigOops", "RageQuit", "EZ4Me", "UwUOwned", "CryMore", "Knight", "L0lWut", "SussyBaka", "NPC_Feed", "SpawnCamper", "EZClap", "U_crying", "GitRekt", "NoobSlayer", "Slayer", "EZPZ", "U_Mad", "SaltLord", "TryHard"],
    coc: ["chief", "clan", "war", "coc", "x", "hunter", "yourdad", "blade", "master", "death", "blademaster", "ruler", "devil", "sin", "sinner", "insane" ,"theripper", "ripper", "Zyn", "Rex", "Vox", "Kyn", "Ace", "Neo", "Ryze", "Blitz", "Hex", "Void", "Nyx", "Ash", "Ruin", "Grim", "Byte", "Glitch", "Node", "Code", "Flux", "Drak", "Odin", "Loki", "Ares", "Hades", "Fen", "Kiro", "Zelo", "Nox", "Izen", "Veno", "Taro", "Zenith", "Ravex", "Kryzen", "Vortex", "Axiom", "Striker", "Blaze", "Phantom", "levi", "ripper", "Noctyx", "Obliv", "ShadowX", "Nightfall", "Twilight", "Grimzor", "Darkryn", "ByteLord", "Neural", "CodeX", "Glitcher", "Techryn", "Cyberix", "Drakon", "Valryn", "Aether", "Mythos", "Runeblade", "Stormveil", "Zerion", "Kairox", "Velon", "Izenor", "Nexira", "Solrex", "Spartax", "CaesarX", "NeoNapoleon", "AttilaV2", "GenghisFX", "DraculaVoid", "Tamerlane", "Dracula", "Genghis", "Attila", "Caesar", "Alexander", "Nero", "Bismarck", "Cortez", "Alexndr", "HanniX", "Ner0", "hokage", "solosaint", "ShakaRage", "uchiha", "IvanFX", "CorTezX", "Iron", "VladX", "RagnarFX", "Chernob", "M0rdred", "DraveN", "Lil1th", "ApepX", "Kh4os", "B4lor", "Medu5a", "Hades", "Ares", "Thor", "Loki", "Odin", "Anubis", "Fenrir", "Kratos", "Raijin", "LolNo", "BigOops", "RageQuit", "EZ4Me", "UwUOwned", "CryMore", "Knight", "L0lWut", "SussyBaka", "NPC_Feed", "SpawnCamper", "EZClap", "U_crying", "GitRekt", "NoobSlayer", "Slayer", "EZPZ", "U_Mad", "SaltLord", "TryHard"],
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



