let firstNameInput = document.getElementById("firstNameInput");
let searchSubBtn = document.getElementById("searchSubBtn");
let searchResult = document.getElementById("searchResult");

let savedSearchInput = '';
let studentDirectoryURL = '';

searchSubBtn.addEventListener("click", function(){
    studentDirectoryApi(firstNameInput)
})

function urlCall(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data =>
        {
            searchResult.textContent = data
            console.log(data);
        }
    )
}

function studentDirectoryApi(firstNameInput){
    if(firstNameInput.value){
        savedInput = firstNameInput.value;
        studentDirectoryURL = "https://richardallforone.azurewebsites.net/StudentDirectory/getstudentbyfirstname/" + savedInput;
        urlCall(studentDirectoryURL)
    }else{
        searchResult.textContent = 'Enter a valid response';
    }
}


function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/getstudentbyfirstname/Richard")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();