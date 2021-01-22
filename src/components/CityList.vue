<template>
  <div class="cities">
    <button class="refresh" v-on:click="clickRefresh">&orarr;</button>
    <div v-if="isLoading" class="loading-container">
      <div class="loading"></div>
    </div>

    <ul v-if="cities.length > 0">
      <li v-for="city in cities" v-bind:key="city.name">
        <City :city="city.name" :description="city.description" :temperature="city.temperature" :humidity="city.humidity" />
      </li>
    </ul>

    <div v-if="cities.length === 0">No cities.</div>
    <AddCity v-show="$store.state.showAddCity" />
    <button id="add-city" v-on:click="$store.state.showAddCity = true">
      Add
    </button>
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
    document.addEventListener('touchstart', e => this.swipeStart(e), false);
    document.addEventListener('touchmove', e => this.swipe(e), false);
    document.addEventListener('touchend', () => this.swipeEnd(), false);
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  data() {
    return {
      pStart: {x: 0, y: 0},
      pCurrent: {x: 0, y: 0}
    }
  },
  methods: {
    initStore() {
      this.$store.commit('initializeStore');
    },
    swipeStart(e) {
      if (typeof e['targetTouches'] !== "undefined") {
        let touch = e.targetTouches[0];
        this.pStart.x = touch.screenX;
        this.pStart.y = touch.screenY;
      } else {
        this.pStart.x = e.screenX;
        this.pStart.y = e.screenY;
      }
    },
    swipe(e) {
      if (typeof e['targetTouches'] !== "undefined") {
        let touch = e.targetTouches[0];
        this.pCurrent.x = touch.screenX;
        this.pCurrent.y = touch.screenY;
      } else {
        this.pCurrent.x = e.screenX;
        this.pCurrent.y = e.screenY;
      }
      let changeY = Math.abs(this.pStart.y - this.pCurrent.y);
      if (document.body.scrollTop === 0) {
        if (changeY > 100) this.loading();
      }
    },
    swipeEnd() {
      if (this.isLoading) this.$store.commit('updateLocalStoreCities');
    },
    loading() {
      this.$store.commit('changeIsLoading', true);
    },
    clickRefresh() {
      this.loading();
      this.swipeEnd();
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .cities {
    width: 100% !important;
  }
  .refresh {
    visibility: hidden!important;
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

.loading-container {
  height: 100px;
  padding: 0.65rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-container .loading {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: aqua;
  border-right-color: aqua;
  animation: loading 0.5s infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.refresh {
  visibility: visible;
  font-size: 1.15rem;
  outline: none;
  border: none;
  padding: 0.55rem;
  border-radius: 5px;
}

.refresh:hover{
  background-color: darkgray;
}
</style>