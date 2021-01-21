<template>
  <div>
    <h3>Weather</h3>
    <CityList />
  </div>
</template>

<script>
import CityList from "./components/CityList.vue";

export default {
  name: "App",
  components: {
    CityList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cadetblue;
  margin-top: 60px;
}
</style>
