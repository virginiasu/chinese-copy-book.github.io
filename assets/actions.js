function updateCName() {
  const cname = document.getElementById("chineseText").value;
  const cnameDisplay = document.getElementById("chineseName");
  cnameDisplay.innerHTML = cname;
}

function updateEName() {
  const ename = document.getElementById("englishText").value;
  const enameDisplay = document.getElementById("englishName");
  enameDisplay.innerHTML = ename;
}

function toggleDate() {
  const dateToggle = document.getElementById("dateToggle").checked;
  const currentDate = new Date().toDateString();
  const dateText = dateToggle ? currentDate : "";
  document.getElementById("date").innerHTML = dateText;
}
