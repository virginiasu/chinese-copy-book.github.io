function updateCName() {
  const cname = document.getElementById("chineseText").value;
  const ename = document.getElementById("englishText").value;
  const dateToggle = document.getElementById("dateToggle").checked;
  const cnameDisplay = document.getElementById("chineseName");
  cnameDisplay.innerHTML = cname;

  if (cname || ename || dateToggle) {
    document.getElementById("printHeader").style.display = "block";
  } else {
    document.getElementById("printHeader").style.display = "none";
  }
}

function updateEName() {
  const cname = document.getElementById("chineseText").value;
  const ename = document.getElementById("englishText").value;
  const dateToggle = document.getElementById("dateToggle").checked;
  const enameDisplay = document.getElementById("englishName");
  enameDisplay.innerHTML = ename;

  if (cname || ename || dateToggle) {
    document.getElementById("printHeader").style.display = "block";
  } else {
    document.getElementById("printHeader").style.display = "none";
  }
}

function toggleDate() {
  const cname = document.getElementById("chineseText").value;
  const ename = document.getElementById("englishText").value;
  const dateToggle = document.getElementById("dateToggle").checked;
  const currentDate = new Date().toDateString();
  const dateText = dateToggle ? currentDate : "";
  document.getElementById("date").innerHTML = dateText;

  if (cname || ename || dateToggle) {
    document.getElementById("printHeader").style.display = "block";
  } else {
    document.getElementById("printHeader").style.display = "none";
  }
}
