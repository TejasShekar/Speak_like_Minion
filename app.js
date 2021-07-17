var inputTxt = document.querySelector("#input-txt")
var translateBtn = document.querySelector("#translate-btn")
var outputTxt = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translateURL(input){
    return serverURL+"?"+"text="+input;
}
function clickEventHandler(){
    // var txtInput = inputTxt.value; 
    //The above line will grad value from textarea and assign it to a variable 'txtInput'. 

    fetch(translateURL(inputTxt.value))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputTxt.innerHTML = translatedTxt;
    })

    // The below gives a explanation of the arrow functions used above

    // .then(function responseHandler(response){ return response.json()})
    // .then(function logJson(json){
    //     var translatedTxt = json.contents.translated;
    //     outputTxt.innerHTML = translatedTxt;
    // })
}

translateBtn.addEventListener("click", clickEventHandler)