<template>
  <div>
    <input type="text" placeholder="City name" v-model="city" />
    <input
      type="button"
      value="Cancel"
      v-on:click="$store.state.showAddCity = false"
    />
    <input type="submit" value="Finish" v-on:click="addCity()" />
  </div>
</template>

<script>
export default {
  name: "AddCity",
  data() {
    return {
      city: "",
    };
  },
  methods: {
    addCity() {
      this.$store.commit('addLocalStoreCities', this.city);
      this.$store.state.showAddCity = false;
      this.city = "";
    },
  },
};
</script>

<style>
</style>