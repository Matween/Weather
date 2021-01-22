import { createApp } from 'vue'
import { createStore } from 'vuex'
import { getCityData } from './helpers/helpers.js'

import App from './App.vue'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            cities: [],
            showAddCity: false,
            isLoading: false,
        }
    },
    mutations: {
        addLocalStoreCities(state, cityName) {
            getCityData(cityName).then(cData => {
                state.cities.push(cData);
                localStorage.setItem('cities', JSON.stringify(state.cities));
            })
        },
        updateLocalStoreCities(state) {
            for (let i = 0; i < state.cities.length; i++) {
                getCityData(state.cities[i].name).then(cData => {
                    state.cities[i] = cData;
                    localStorage.setItem('cities', JSON.stringify(state.cities));
                });
            }
            
            state.isLoading = false;
        },
        initializeStore(state) {
            state.cities = localStorage.getItem('cities') == null ? [] : JSON.parse(localStorage.getItem('cities'));
        },
        changeIsLoading(state, loading) {
            state.isLoading = loading;
        }
    },
})

app.use(store);
app.mount('#app')
