const updateElement = document.querySelector("#remaining-char");
const textArea = document.querySelector("textarea");

function updateRemainingChar(event) {
  const typedChar = textArea.value.length;

  const remainingChar = 60 - typedChar;
  updateElement.textContent = remainingChar;

  if (remainingChar > 10) {
    
    updateElement.style.color = 'rgb(0,0,0)';
} else if (remainingChar > 0 && remainingChar <= 10) {
    updateElement.style.color = 'rgb(246,117,11)';
} else updateElement.style.color = 'rgb(191, 10, 19)';
}

textArea.addEventListener("input", updateRemainingChar);

