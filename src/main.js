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
            isError: '',
        }
    },
    mutations: {
        addLocalStoreCities(state, cityName) {
            state.isError = '';
            getCityData(cityName).then(cData => {
                state.cities.push(cData);
                localStorage.setItem('cities', JSON.stringify(state.cities));
            }).catch(error => {
                state.isError = error;
            })
        },
        updateLocalStoreCities(state) {
            let promises = [];
            state.isError = '';
            for (let i = 0; i < state.cities.length; i++) {
                promises.push(getCityData(state.cities[i].name));
            }
            Promise.all(promises).then(vals => {
                state.cities = vals;
                localStorage.setItem('cities', JSON.stringify(state.cities));
                state.isLoading = false;
            }).catch(error => {
                state.isError = error;
                state.isLoading = false;
            });
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
