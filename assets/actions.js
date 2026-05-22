function updateCName() {
  const cname = $("#chineseText").val();
  const ename = $("#englishText").val();
  const dateToggle = $("#dateToggle").is(":checked");
  const cnameDisplay = document.getElementById("chineseName");
  cnameDisplay.innerHTML = cname;

  if (cname || ename || dateToggle) {
    $("#printHeader").show();
  } else {
    $("#printHeader").hide();
  }
}

function updateEName() {
  const cname = $("#chineseText").val();
  const ename = $("#englishText").val();
  const dateToggle = $("#dateToggle").is(":checked");
  const enameDisplay = document.getElementById("englishName");
  enameDisplay.innerHTML = ename;

  if (cname || ename || dateToggle) {
    $("#printHeader").show();
  } else {
    $("#printHeader").hide();
  }
}

function toggleDate() {
  const cname = $("#chineseText").val();
  const ename = $("#englishText").val();
  const dateToggle = $("#dateToggle").is(":checked");
  const currentDate = new Date().toDateString();
  const dateText = dateToggle ? currentDate : "";
  document.getElementById("date").innerHTML = dateText;

  if (cname || ename || dateToggle) {
    $("#printHeader").show();
  } else {
    $("#printHeader").hide();
  }
}

function printPreview() {
  window.print();
}

function pickAll() {
  const level = $(event.target).parent().parent();
  level.find("button.character").each(function () {
    addToPrint($(this).text());
  });
}

function addToPrint(character) {
  const togoVal = parseInt($("#togoRange").val()) || 12;
  const leadCount = Math.round(togoVal * 0.8);
  const practiceCount = togoVal - leadCount;

  var printArea = $("#characters");
  var printRow = $("<div></div>").addClass("row");
  printRow.append(`<div class="divider">divider</div>`);
  for (var i = 0; i < leadCount; i++) {
    printRow.append(
      `<span class="char lead"><span class="letter">${character}</span></span>`
    );
  }
  for (var i = 0; i < practiceCount; i++) {
    printRow.append(
      `<span class="char practice"><span class="letter">${character}</span></span>`
    );
  }
  printRow.append(`<button class="delete noPrint">x</button>`);
  printArea.append(printRow);
  printRow.find(".delete").click(removeRow);
}

function removeRow() {
  $(event.target).parent().remove();
}

$(document).on("input", "#togoRange", function () {
  const togoVal = parseInt($(this).val()) || 12;
  const leadCount = Math.round(togoVal * 0.8);
  const practiceCount = togoVal - leadCount;

  $("#characters").toggleClass("togo-less", togoVal === 5);

  $("#characters .row").each(function () {
    const character = $(this).find(".char .letter").first().text();
    $(this).find(".char").remove();
    let html = "";
    for (var i = 0; i < leadCount; i++) {
      html += `<span class="char lead"><span class="letter">${character}</span></span>`;
    }
    for (var i = 0; i < practiceCount; i++) {
      html += `<span class="char practice"><span class="letter">${character}</span></span>`;
    }
    $(this).find(".divider").after(html);
  });
});

function AddCustomToPrint() {
  const characters = $("#customTextInput");
  const characterArray = characters.val().split("");
  $.each(characterArray, function (index, character) {
    addToPrint(character);
  });
  characters.val("");
}
