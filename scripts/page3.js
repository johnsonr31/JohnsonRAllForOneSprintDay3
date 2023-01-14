let nameAnswerInput = document.getElementById("nameAnswerInput");
let wakeTimeInput = document.getElementById("wakeTimeInput");
let askingQuestionsBtn = document.getElementById("askingQuestionsBtn");
let askingQuestionsResponse = document.getElementById("askingQuestionsResponse");

let savedInput1 = '';
let savedInput2 = '';

let askingQuestionsUrl = '';

askingQuestionsBtn.addEventListener("click", function(){
    askingQuestionsAPI(nameAnswerInput, wakeTimeInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            askingQuestionsResponse.textContent = data
            console.log(data);
        }
    )
}

function askingQuestionsAPI(nameAnswerInput, wakeTimeInput){
    if(nameAnswerInput.value && wakeTimeInput.value)
    {
        savedInput1 = nameAnswerInput.value;
        savedInput2 = wakeTimeInput.value;
        askingQuestionsUrl = "https://richardallforone.azurewebsites.net/StudentDirectory/askingquestions/" + savedInput1 + "/" + savedInput2;
        urlCall(askingQuestionsUrl)
    }else{
        askingQuestionsResponse.textContent = 'Please enter valid input';
    }
}

function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/askingquestions/Richard/6")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();