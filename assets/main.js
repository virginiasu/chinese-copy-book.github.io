function addToPrint(character) {
  const printArea = document.getElementById("characters");
  const printRow = document.createElement("div");
  printRow.classList.add("row");
  for (i = 0; i < 3; i++) {
    printRow.innerHTML += `<span class="char lead"><span class="letter">${character}</span></span>`;
  }
  for (i = 0; i < 9; i++) {
    printRow.innerHTML += `<span class="char practice"><span class="letter">${character}</span></span>`;
  }
  printRow.innerHTML += `<div class="divider">divider</div>`;
  printArea.appendChild(printRow);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/levels.json")
    .then((response) => response.json())
    .then((data) => {
      for (const level in data) {
        // level, levelData
        const levelData = data[level];

        const levelDiv = document.createElement("div");
        levelDiv.classList.add("level");
        levelDiv.innerHTML = `
            <h4>Grade ${level}</h4>
            <div class="level-content" id=${level}></div>
            `;

        document.getElementById("levels").appendChild(levelDiv);

        levelData.forEach((character) => {
          const characterSpan = document.createElement("span");
          characterSpan.classList.add("character");
          characterSpan.innerHTML = `
                <button class="character" onclick="addToPrint('${character}')">${character}</button>
                `;
          document.getElementById(level).appendChild(characterSpan);
        });
      }
    });
});
