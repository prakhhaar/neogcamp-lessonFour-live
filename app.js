var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

// API call
var serverURL = "https://api.funtranslations.com/translate/minion.json"


// Adding the input by the user to the URL
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// Sending error message to the user using alert box
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

// Handling the click
function clickHandler() {
    var inputText = txtInput.value;

    // Fetching the API response
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)