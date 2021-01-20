<template>
  <div class="info">
    <div class="city-info">
      {{ city }} <br />
      {{ description }}
    </div>
    <div class="weather-info">
      {{ temperature }} <br />
      {{ humidity }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "City",
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      temperature: "",
      humidity: "",
      description: "",
    };
  },
  mounted() {
    const self = this;
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: this.city,
        id: "2172797",
        units: "metric",
        mode: "json",
      },
      headers: {
        "x-rapidapi-key": process.env.VUE_APP_OPENWEATHERMAP_API_KEY,
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const wData = response.data;
        console.log(wData);
        self.temperature = wData.main.temp + "°C";

        let descriptor = wData.weather[0].description;
        self.description = descriptor.charAt(0).toUpperCase() + descriptor.slice(1); // capitalize
        self.humidity = wData.main.humidity + "%";
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    getWeatherData() {},
  },
};
</script>

<style scoped>
.info {
  width: 100%;
}
.city-info {
  float: left;
}
.weather-info {
  float: right;
}
</style>