<template>
  <div>
    <ul class="cities" v-if="cities.length > 0"></ul>

    <div v-if="cities.length === 0">No cities.</div>

    <button>Add</button>
  </div>
</template>

<script>
export default {
  name: "CityList",
  data() {
      return {
        cities: [],
      }
  },
};
</script>

<style>
</style>