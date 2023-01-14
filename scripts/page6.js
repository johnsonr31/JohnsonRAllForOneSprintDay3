let numInput = document.getElementById("numInput");
let oddOrEvenBtn = document.getElementById("oddOrEvenBtn");
let oddOrEvenResponse = document.getElementById("oddOrEvenResponse");

let savedNumInput = '';
let intInput = 0;

let oddOrEvenURL = '';

oddOrEvenBtn.addEventListener("click", function(){
    oddOrEvenApi(numInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            oddOrEvenResponse.textContent = data
            console.log(data);
        }
    )
}

function oddOrEvenApi(numInput){
    if(numInput.value){
        savedNumInput = numInput.value;
        intInput = parseInt(savedNumInput);
        oddOrEvenURL = "https://richardallforone.azurewebsites.net/StudentDirectory/odd/" + savedNumInput;
        urlCall(oddOrEvenURL)
    }else{
        oddOrEvenResponse.textContent = 'Please input valid number'
    }
}

function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/odd/45")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();