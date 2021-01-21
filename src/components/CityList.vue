<template>
  <div class="cities">
    <ul v-if="cities.length > 0">
      <li v-for="city in cities" v-bind:key="city">
        <City :city="city" />
      </li>
    </ul>

    <div v-if="cities.length === 0">No cities.</div>
    <AddCity v-show="$store.state.showAddCity" />
    <button id="add-city" v-on:click="$store.state.showAddCity = true">Add</button>
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
@media only screen and (max-width: 768px) {
  .cities {
    width: 100%!important;
  }
}

.cities {
  width: 50%;
  margin: 0 auto;
}
ul {
  padding: 0;
  list-style-type: none;
  width: 100%;
}
ul li {
  display: flex;
}

#add-city {
  width: 30%;
  margin: 0 auto;
  padding: 0.5rem;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-weight: bolder;
  background-color: rgb(132, 223, 180);
}

#add-city:hover,
#add-city:focus {
  background-color: rgb(112, 184, 150);
  outline: none;
}

</style>