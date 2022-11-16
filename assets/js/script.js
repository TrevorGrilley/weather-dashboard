var cityEl = document.getElementById("city-search");
var searchEl = document.getElementById("search-button");
var clearEl = document.getElementById("clear-previous-searches");
var nameEl = document.getElementById("city-name");
var currentPicEl = document.getElementById("current-pic");
var currentTempEl = document.getElementById("temperature");
var currentHumidityEl = document.getElementById("humidity");4
var currentWindEl = document.getElementById("wind-speed");
var currentUVEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history"); 
var cityStoredList = [];


var apiKey = "0c960b0d0237228b3b34cbe765e682dd";

var getCurrentWeather = function(currentCity) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + apiKey + "&units=imperial";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            var cityName = data.name;
            displayWeather(data, currentCity)
            storeCity(cityName);
        });
    });
};


//UV Index Colors
var uvindex = parseInt(response.current.uvindex);
if (uvindex <= 2) {
    $(".color").css({ "background-color": "green", "color": "white" });
} else if (uvindex >= 3 && uvindex <= 5) {
    $(".color").css({ "background-color": "yellow", "color": "black" });
} else if (uvindex >= 6 && uvi <= 7) {
    $(".color").css({ "background-color": "orange" });
} else if (uvindex >= 8 && uvindex <= 10) {
    $(".color").css({ "background-color": "red", "color": "white" });
} else if (uvindex >= 11) {
    $(".color").css({ "background-color": "violet", "color": "white" });
}


//Fill corresponding html tags with current data
$("#temperature").text("Temperature: " + response.current.temp + "° F");
$("#humidity").text("Humidity: " + response.current.humidity + "%");
$("#wind-speed").text("Wind Speed: " + response.current.wind_speed + " MPH");
$("UV-index").text(response.current.uvindex);

var savedCity = function(saveCity) {

    savedCityList = JSON.parse(localStorage.getItem("savedList"));
    if (savedCityList.indexOf(saveCity) == -1) {
        savedCityList.push(saveCity);
        createBtn(saveCity);
    }
    localStorage.setItem("previousCity", JSON.stringify(savedCityList));
    console.log(savedCityList);
};

function init() {
    if(JSON.parse(localStorage.getItem("savedList")) !== null) {
        savedCityList= JSON.parse(localStorage.getItem("savedList"));
    } else {
        localStorage.setItem("savedList", json.stringify([]));
    }
}

searchEl.addEventListener("click", function () {
    const previousSearch= cityEl.value;
    getWeather(previousSearch);
    searchHistory.push(previousSearch);
    localStorage.setItem("search", JSON.stringify(previousSearch));
    renderPreviousSearches();
})

// delete previous searches
clearEl.addEventListener("click", function () {
    localStorage.clear();
    previousSearch = [];
    renderPreviousSearches();
})

//function to search previously searched cities
function init(){
    previousCity = localStorage.getItem("previousCity");
    if (previousCity !== null) {

        var previousCity = $("<button>");
        previousCity.addClass("list-group-item list-group-item-action");
        previousCity.text(cityName);
        $("ul").prepend(previousCity);
        getWeather()
    }
}




