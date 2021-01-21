<template>
  <div class="cities">
    <ul v-if="cities.length > 0">
      <li v-for="city in cities" v-bind:key="city">
        <City :city="city" />
      </li>
    </ul>

    <div v-if="cities.length === 0">No cities.</div>
    <AddCity v-show="$store.state.showAddCity" />
    <button v-on:click="$store.state.showAddCity = true">Add</button>
  </div>
</template>

<script>
import AddCity from "./AddCity.vue";
import City from "./City.vue";

export default {
  name: "CityList",
  components: {
    City,
    AddCity,
  },
  mounted() {
    this.initStore();
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  methods: {
    initStore() {
      this.$store.commit('initializeStore');
    }
  }
};
</script>

<style scoped>
.cities {
  width: 50%;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  width: 100%;
}
ul li {
  display: flex;
}
</style>