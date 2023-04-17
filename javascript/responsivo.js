const inputText = document.getElementById("text_input");
const cripButton = document.getElementById("crip");
const descButton = document.getElementById("desc");
const outputText = document.querySelector(".results");
const copyButton = document.getElementById("copiar");

cripButton.addEventListener("click", () => {
    copyButton.classList.remove("hidden");
    copyButton.classList.add("copiar");
    let text = inputText.value;
    text = text.replace(/e/gi, "enter");
    text = text.replace(/i/gi, "imes");
    text = text.replace(/a/gi, "ai");
    text = text.replace(/o/gi, "ober");
    text = text.replace(/u/gi, "ufat");
    outputText.textContent = text;
    outputText.parentNode.firstChild.classList.add("hidden");
    outputText.classList.remove("hidden");
});

descButton.addEventListener("click", () => {
    copyButton.classList.remove("hidden");
    copyButton.classList.add("copiar");
    let text = inputText.value;
    text = text.replace(/enter/gi, "e");
    text = text.replace(/imes/gi, "i");
    text = text.replace(/ai/gi, "a");
    text = text.replace(/ober/gi, "o");
    text = text.replace(/ufat/gi, "u");
    outputText.textContent = text;
    outputText.parentNode.lastChild.classList.add("hidden");
    outputText.classList.remove("hidden");
});

copyButton.addEventListener("click", () => {
  const textToCopy = outputText.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
});
