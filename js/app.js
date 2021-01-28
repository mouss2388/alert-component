const input = document.getElementById("input");
const paras = document.querySelectorAll(".para");
const hello_world = "Hello World";

input.oninput = refreshAlert;
initParaContent();

function initParaContent() {
  paras.forEach(element => {
    element.textContent = hello_world;
  }); 
}


function refreshAlert() {
  if (input.value) {
    paras.forEach(element => {
      element.textContent = input.value;
    });
  } else {
    initParaContent();
  }
}


