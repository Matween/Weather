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
        addLocalStoreCities(state, city) {
            state.cities.push(city);
            localStorage.setItem('cities', JSON.stringify(state.cities));
        },
        initializeStore(state) {
            state.cities = localStorage.getItem('cities') == null ? [] : JSON.parse(localStorage.getItem('cities'));
        }
    }
})

app.use(store);
app.mount('#app')
