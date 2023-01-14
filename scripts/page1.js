let sayHelloInput = document.getElementById("sayHelloInput");
let sayHelloResponse = document.getElementById("sayHelloResponse");
let sayHelloBtn = document.getElementById("sayHelloBtn");

let savedInput = '';
let sayHelloURL = '';

sayHelloBtn.addEventListener("click", function(){
    sayHelloApi(sayHelloInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            sayHelloResponse.textContent = data
            console.log();
        }
    )
}

function sayHelloApi(sayHelloInput){
    var letters = /^[A-Za-z]+$/;
    if(sayHelloInput.value){
        savedInput = sayHelloInput.value;
        sayHelloURL = "https://richardallforone.azurewebsites.net/StudentDirectory/sayhello/" + savedInput;
        urlCall(sayHelloURL)
    }else{
        sayHelloResponse.textContent = 'Enter a valid response';
    }
}

function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/sayhello/Richard")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();
