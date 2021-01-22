<template>
  <div class="info">
    <div class="city-info">
      <div class="city-name">{{ city }}</div>
      <div class="city-description">{{ description }}</div>
    </div>
    <div class="weather-info">
      {{ temperature }} <br />
      {{ humidity }}
    </div>
  </div>
</template>

<script>

export default {
  name: "City",
  props: {
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    temperature: {
      type: String,
      required: true,
    },
    humidity: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.info {
  width: 100%;
  background-color: aliceblue;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  color: cadetblue;
}
.city-info {
  float: left;
  text-align: left;
}
.weather-info {
  float: right;
  text-align: right;
}
.city-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.city-description {
  font-weight: 100;
  color: darkgrey;
  font-size: 0.85rem;
}
</style>