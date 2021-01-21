<template>
  <div>
    <div class="input-group">
      <input type="text" placeholder="City name" v-model="city" />
    </div>
    <div class="button-group">
      <input
        type="button"
        value="Cancel"
        v-on:click="$store.state.showAddCity = false"
      />
      <input type="submit" value="Finish" v-on:click="addCity()" />
    </div>
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
      this.$store.commit("addLocalStoreCities", this.city);
      this.$store.state.showAddCity = false;
      this.city = "";
    },
  },
};
</script>

<style scoped>
.input-group input {
  width: 60%;
  height: 30px;
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
}
.button-group input {
  width: 30%;
  padding: 0.5rem;
  margin: 0.5rem;
  height: 30px;
  border: none;
  border-radius: 5px;
  outline: none;
}

.button-group input:focus,
.button-group input:hover {
  background-color: darkgrey;
}
</style>