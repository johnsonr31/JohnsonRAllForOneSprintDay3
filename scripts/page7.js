let userInput = document.getElementById("userInput");
let reverseSubBtn = document.getElementById("reverseSubBtn");
let reverseResult = document.getElementById("reverseResult");

let savedInput = '';
let reverseInput = '';
let reverseItURL = '';


reverseSubBtn.addEventListener("click", function(){
    reverseItApi(userInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            reverseResult.textContent = data
            console.log(data);
        }
    )
}

function reverseItApi(userInput){
    if(userInput.value){
        savedInput = userInput.value;
        reverseItURL = "https://richardallforone.azurewebsites.net/StudentDirectory/reverseit/" + savedInput;
        urlCall(reverseItURL)
    }else{
        reverseResult.textContent = 'Enter a valid response';
    }
}



function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/reverseit/Morrowind")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();