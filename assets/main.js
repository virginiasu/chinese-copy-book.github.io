$(document).ready(function () {
  $.getJSON("data/levels.json", function (data) {
    $.each(data, function (level, levelData) {
      var levelDiv = $("<div></div>").addClass("level");
      levelDiv.html(`
              <h4>Grade ${level} <button class="pickAll" onClick="pickAll()">全选</button></h4>
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
