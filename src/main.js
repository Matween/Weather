import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            cities: [],
            showAddCity: false
        }
    },
    mutations: {
        addCity(state, city) {
            state.cities.push(city);
        }
    }
})

app.use(store);
app.mount('#app')
