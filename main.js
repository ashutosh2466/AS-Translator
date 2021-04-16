var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input){
    return serverURL + "?" +"text=" +input;
}
function errorHandler(error){
    console.log("oops! there is an error",error);
    alert("something went wrong Try next time");
}

    function clickHandler() {
        var inputText = txtInput.Value;

        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)