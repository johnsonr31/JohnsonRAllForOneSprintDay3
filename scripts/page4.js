let inputFirstNum = document.getElementById("inputFirstNum");
let inputSecondNum = document.getElementById("inputSecondNum");
let greaterInputBtn = document.getElementById("greaterInputBtn");
let greaterThanLessThanResponse = document.getElementById("greaterThanLessThanResponse");

let firstSavedInput = '';
let secondSavedInput = '';

let inputNum1 = 0;
let inputNum2 = 0;

let greaterThanOrLessThanURL = '';

greaterInputBtn.addEventListener("click", function(){
    greaterOrLessApi(inputFirstNum, inputSecondNum)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            greaterThanLessThanResponse.textContent = data;
            console.log(data);
        }
    )
}

function greaterOrLessApi(inputFirstNum, inputSecondNum){
    if(inputFirstNum.value && inputSecondNum.value){
        firstSavedInput = inputFirstNum.value;
        secondSavedInput = inputSecondNum.value;
        inputNum1 = parseInt(firstSavedInput);
        inputNum2 = parseInt(secondSavedInput);
        greaterThanOrLessThanURL = "https://richardallforone.azurewebsites.net/StudentDirectory/greaterthanorlessthan/" + firstSavedInput + "/" + secondSavedInput;
        urlCall(greaterThanOrLessThanURL);
    }else{
        greaterThanLessThanResponse.textContent = 'Please input valid numbers';
    }
}


function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/greaterthanorlessthan/123/324")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();