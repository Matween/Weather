<template>
  <div>
    <ul class="cities" v-if="cities.length > 0"></ul>

    <div v-if="cities.length === 0">No cities.</div>
    <AddCity v-show="$store.state.showAddCity" />
    <button v-on:click="$store.state.showAddCity = true">Add</button>
  </div>
</template>

<script>
import AddCity from './AddCity.vue'

export default {
  name: "CityList",
  components: {
      AddCity
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    }
  }
};
</script>

<style>
</style>