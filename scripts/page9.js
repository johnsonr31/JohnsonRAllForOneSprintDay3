let fastFoodBtn = document.getElementById("fastFoodBtn");
let chineseBtn = document.getElementById("chineseBtn");
let italianBtn = document.getElementById("italianBtn");
let restaurantResult = document.getElementById("restaurantResult");



function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/restaurantpicker/FastFood")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();