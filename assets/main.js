$(document).ready(function () {
  $.getJSON("data/levels.json", function (data) {
    $.each(data, function (level, levelData) {
      var levelDiv = $("<div></div>").addClass("level");
      levelDiv.html(`
              <h4>
                <span class="accordion-toggle">▶</span>
                Level ${level} 
                <button class="pickAll" onClick="pickAll()">全选 Select All</button>
              </h4>
              <div class="level-content" id="${level}"></div>
          `);

      $("#levels").append(levelDiv);

      // Add accordion functionality
      levelDiv.find("h4").click(function (e) {
        // Don't trigger accordion when clicking the pickAll button
        if ($(e.target).hasClass("pickAll")) {
          return;
        }

        var content = $(this).siblings(".level-content");
        var toggle = $(this).find(".accordion-toggle");

        if (content.is(":visible")) {
          content.slideUp();
          toggle.text("▶");
        } else {
          content.slideDown();
          toggle.text("▼");
        }
      });

      // Initially hide the content
      $("#" + level).hide();

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
