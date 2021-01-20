<template>
  <div>
      <form>
          <input type="text" placeholder="City name" v-model="city">
          <input type="button" value="Cancel" v-on:click="$store.state.showAddCity = false">
          <input type="submit" value="Finish">
      </form>
  </div>
</template>

<script>
export default {
    name: 'AddCity',
    data() {
        return {
            city: ''
        }
    },
    methods: {
        addCitiy() {
            this.$store.state.addCity(this.$store.state, { name: this.city, temperature: 0.0, humidity: 0.0, description: ''})
            this.$store.state.showAddCity = false;
        }
  },
}
</script>

<style>

</style>