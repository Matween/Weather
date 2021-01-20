<template>
  <div>
      <form>
          <input type="text" placeholder="City name" v-model="city">
          <input type="button" value="Cancel">
          <input type="submit" value="Finish">
      </form>
  </div>
</template>

<script>
export default {
    name: 'AddCity',
    data() {
        return {
            city
        }
    },
    methods() {

    }
}
</script>

<style>

</style>