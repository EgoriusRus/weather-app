import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherInfo: []
  },
  
  getters: {
    weatherInfo: state => state.weatherInfo,
  },
  
  mutations: {
    SET_INFO(state, payload) {
      console.log(payload);
      state.weatherInfo = payload.data;
   }
  },
  
  actions: {
    getWeatherInfo({commit}) {
			return new Promise((resolve, reject) => {
				axios({url: 'http://api.openweathermap.org/data/2.5/forecast?lat=51.95&lon=33.78&appid=0da145b317baaa8dfcad139c6c1cc590&lang=ru', method: 'GET' })
        .then(resp => {
           commit('SET_INFO', resp)
           resolve(resp);
        })
        .catch(err => {
           reject(err)
          })
		    })
		}
  }
});