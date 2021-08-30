document.getElementById('searchBtn').addEventListener('click', () => {
    let cityName = document.getElementById('searchBox').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=102685dad902cb393fda412907385d2a`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherInfo(data));
});

const displayWeatherInfo = (data) => {
    let weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = `
        <h3 class="card-title fs-3 fw-bold lh-lg text-Dark text-center pb-3 pt-5 ">${data.name}</h3>
        <h1 class="card-text fs-1 fw-bold text-Dark text-center">${Math.round(data.main.temp - 273)} <sup>°C</sup></h1>
        <h3 class="card-title fs-3 fw-bold lh-lg text-Dark text-center ">${data.weather[0].main}</h3>
        <hr class="border border-white border-5">
        <table class="table table-borderless w-100"><tbody>
                <tr><td><h4 class="text-dark fs-5 text-start">Feels Like: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${Math.round(data.main.feels_like - 273)}<sup>°C</sup></h4></td></tr>                    
                <tr><td><h4 class="text-dark fs-5 text-start">Minimum: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${Math.round(data.main.temp_min - 273)}<sup>°C</sup></h4></td></tr>
                <tr><td><h4 class="text-dark fs-5 text-start">Maximum: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${Math.round(data.main.temp_max - 273)}<sup>°C</sup></h4></td></tr>
                <tr><td><h4 class="text-dark fs-5 text-start">Pressure: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${data.main.pressure}mbar</h4></td></tr>
                <tr><td><h4 class="text-dark fs-5 text-start">Humidity: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${data.main.humidity}%</h4></td></tr>
                <tr><td><h4 class="text-dark fs-5 text-start">Wind Speed: </h4></td>
                    <td><h4 class="text-dark fs-5 text-start">${data.wind.speed}km/h</h4></td></tr></tbody></table>
    `;
    let cityName = document.getElementById('searchBox');
    cityName.value = '';
}