$(document).ready(function () {
  function removeRow() {
    $(event.target).parent().remove();
  }

  function addToPrint(character) {
    var printArea = $("#characters");
    var printRow = $("<div></div>").addClass("row");
    for (var i = 0; i < 3; i++) {
      printRow.append(
        `<span class="char lead"><span class="letter">${character}</span></span>`
      );
    }
    for (var i = 0; i < 12; i++) {
      printRow.append(
        `<span class="char practice"><span class="letter">${character}</span></span>`
      );
    }
    printRow.append(`<button class="delete noPrint">x</button>`);
    printRow.append(`<div class="divider">divider</div>`);
    printArea.append(printRow);
    printRow.find(".delete").click(removeRow);
  }

  $.getJSON("data/levels.json", function (data) {
    $.each(data, function (level, levelData) {
      var levelDiv = $("<div></div>").addClass("level");
      levelDiv.html(`
              <h4>Grade ${level}</h4>
              <div class="level-content" id="${level}"></div>
          `);

      $("#levels").append(levelDiv);

      $.each(levelData, function (index, character) {
        var characterSpan = $("<span></span>").addClass("character");
        characterSpan.html(`
                  <button class="character">${character}</button>
              `);
        characterSpan.find("button").click(function () {
          addToPrint(character);
        });
        $("#" + level).append(characterSpan);
      });
    });
  });
});
