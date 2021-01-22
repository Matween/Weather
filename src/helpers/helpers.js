import axios from 'axios';

export async function getCityData(cityName) {
    let city = {
        name: cityName,
    };
    const options = {
        method: "GET",
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
            q: cityName,
            id: "2172797",
            units: "metric",
            mode: "json",
        },
        headers: {
            "x-rapidapi-key": process.env.VUE_APP_OPENWEATHERMAP_API_KEY,
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
    };
    
    return axios
        .request(options)
        .then(function (response) {
            const wData = response.data;
            city.temperature = wData.main.temp + "°C";
    
            let descriptor = wData.weather[0].description;
            city.description =
                descriptor.charAt(0).toUpperCase() + descriptor.slice(1); // capitalize
            city.humidity = wData.main.humidity + "%";
            return city;
        })
        .catch(function (error) {
            console.log(error);
        });


}