function getAPI() {
    fetch("https://richardallforone.azurewebsites.net/StudentDirectory/restaurantpicker/FastFood")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();