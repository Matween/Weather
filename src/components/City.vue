<template>
  <div class="info">
      <div class="city-info">
         {{ city }} <br>
         {{ description }}
      </div>
      <div class="weather-info">
          {{ temperature }}
          {{ humidity }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'City',
    props: {
        city: {
            type: String,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        humidity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
    }
}
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