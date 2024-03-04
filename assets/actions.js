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
