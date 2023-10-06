let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-area");
let outputDiv = document.querySelector("#output");

// let serverUrl =
//   // "https://lessonfourapineogcamp--junaidmohamed2.repl.co/translate/mockserver";

let serverUrl = "https://api.funtranslations.com/translate/dolan.json"; // dolan translation

function getTranslationUrl(text) {
  return `${serverUrl}?text=${text}`;
}

function errorHandler(error) {
  console.log("erro occured: " + error);
  alert("ooops! Something went wrong please try again later");
}

function handleClick() {
  let inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
    .then((res) => res.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errHandler);
}

btnTranslate.addEventListener("click", handleClick);
