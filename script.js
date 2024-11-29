const inputBox = document.getElementById('inputbox'); 
const listContainer = document.getElementById('list-container'); 

function addTask() {
  if (inputBox.value.trim() === '') { 
    alert("You must write something!");
  } else {
  
    if (listContainer.children.length >= 6) {
      alert("You can only add up to 6 tasks!");
      return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); 
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") { 
    addTask();
  }
});

showTask();
