let numOneInput = document.getElementById("numOneInput");
let numTwoInput = document.getElementById("numTwoInput");
let addTwoNumBtn = document.getElementById("addTwoNumBtn");
let addTwoNumResponse = document.getElementById("addTwoNumResponse");

let savedInput1 = '';
let savedInput2 = '';

let inputNum1 = 0;
let inputNum2 = 0;

let addTwoNumbersURL = '';

addTwoNumBtn.addEventListener("click", function(){
    addTwoNumApi(numOneInput, numTwoInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            addTwoNumResponse.textContent = inputNum1 + inputNum2
            console.log(data);
        }
    )
}

function addTwoNumApi(numOneInput, numTwoInput){
    if(numOneInput.value && numTwoInput.value){
        savedInput1 = numOneInput.value;
        savedInput2 = numTwoInput.value;
        inputNum1 = parseInt(savedInput1);
        inputNum2 = parseInt(savedInput2);
        addTwoNumbersURL = "https://richardallforone.azurewebsites.net/StudentDirectory/addtwonumbers/" + savedInput1 + "/" + savedInput2;
        urlCall(addTwoNumbersURL)
    }else{
        addTwoNumResponse.textContent = 'Please add valid inputs'
    }
}


function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/addtwonumbers/4/9")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();