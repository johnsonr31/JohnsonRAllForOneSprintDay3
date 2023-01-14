let nameInput = document.getElementById("nameInput");
let colorInput = document.getElementById("colorInput");
let nounInput = document.getElementById("nounInput");
let animalInput = document.getElementById("animalInput");
let locationInput = document.getElementById("locationInput");
let nounInput2 = document.getElementById("nounInput2");
let adjectiveInput = document.getElementById("adjectiveInput");
let nounInput3 = document.getElementById("nounInput3");
let adjectiveInput2 = document.getElementById("adjectiveInput2");
let verbInput = document.getElementById("verbInput");
let nounInput4 = document.getElementById("nounInput4");

let madLibBtn = document.getElementById("madLibBtn");
let madLibResponse = document.getElementById("madLibResponse");

let saveInput1 = '';
let saveInput2 = '';
let saveInput3 = '';
let saveInput4 = '';
let saveInput5 = '';
let saveInput6 = '';
let saveInput7 = '';
let saveInput8 = '';
let saveInput9 = '';
let saveInput10 = '';
let saveInput11 = '';

let madLibURL = '';

madLibBtn.addEventListener("click", function(){
    madLibAPI(nameInput, colorInput, nounInput, animalInput, locationInput, nounInput2, adjectiveInput, nounInput3, adjectiveInput2, verbInput, nounInput4)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            madLibResponse.textContent = data
            console.log(data);
        }
    )
}

function madLibAPI(nameInput, colorInput, nounInput, animalInput, locationInput, nounInput2, adjectiveInput, nounInput3, adjectiveInput2, verbInput, nounInput4){
    if(nameInput.value && colorInput.value && nounInput.value && animalInput.value && locationInput.value && nounInput2.value && adjectiveInput.value && nounInput4.value && adjectiveInput2.value && verbInput && nounInput4   )
    {
        saveInput1 = nameInput.value;
        saveInput2 = colorInput.value;
        saveInput3 = nounInput.value;
        saveInput4 = animalInput.value;
        saveInput5 = locationInput.value;
        saveInput6 = nounInput2.value;
        saveInput7 = adjectiveInput.value;
        saveInput8 = nounInput3.value;
        saveInput9 = adjectiveInput2.value;
        saveInput10 = verbInput.value;
        saveInput11 = nounInput4.value;
        madLibURL = "https://richardallforone.azurewebsites.net/StudentDirectory/mad/" + saveInput1 + "/" + saveInput2 + "/" + saveInput3 + "/" + saveInput4 + "/" + saveInput5 + "/" + saveInput6 + "/" + saveInput7 + "/" + saveInput8 + "/" + saveInput9 + "/" + saveInput10 + "/" + saveInput11;
        urlCall(madLibURL)
    }else{
        askingQuestionsResponse.textContent = 'Please enter valid input';
    }
}

function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/mad/John/orange/box/fox/forest/tree/boring/box/exciting/falling/moon")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();