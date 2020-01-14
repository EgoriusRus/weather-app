<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="weather-card one">
            <div class="top">
              <div class="wrapper">
                <div class="mynav">
                </div>
                <h1 class="heading">Средняя температура</h1>
                <h3 class="location">Ростов, Сегодня</h3>
                <span class="desc">{{weatherInfo.list[0].weather[0].description}}</span>
                <p class="temp">
                   <img class="main-icon" :src="'http://openweathermap.org/img/wn/'+weatherInfo.list[0].weather[0].icon+'@2x.png'" alt="">
                  <span class="temp-value">{{averageTemperatureNow}}</span>
                  <span class="deg">0</span>
                  <a href="javascript:;"><span class="temp-type">C</span></a>
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="wrapper">
                <ul class="forecast">
                  <br>
                  <li class="active">
                    <span class="date">Завтра</span>
                    <span class="lnr lnr-sun condition">
                       <img :src="'http://openweathermap.org/img/wn/'+weatherInfo.list[8].weather[0].icon+'@2x.png'" alt="">
                      <span class="temp">{{averageTemperatureTomorrow}}<span class="deg">0</span><span class="temp-type">C</span></span>
                    </span>
                  </li>
                  <li class="active">
                    <span class="date">Послезавтра</span>
                    <span class="lnr lnr-cloud condition">
                      <img :src="'http://openweathermap.org/img/wn/'+weatherInfo.list[16].weather[0].icon+'@2x.png'" alt="">
                      <span class="temp">{{averageTemperatureDayAfter}}<span class="deg">0</span><span class="temp-type">C</span></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  computed: {
    weatherInfo() {
      return this.$store.getters.weatherInfo;
    },
    averageTemperatureNow(){
      let weatherList = this.$store.getters.weatherInfo.list;
      let averageTemperature = 0;
      for (let i = 0; i <= 7 ; i++) {
        averageTemperature += parseFloat(weatherList[i].main.temp);
      }
      return averageTemperature.toFixed(1);
    },
    averageTemperatureTomorrow(){
      let weatherList = this.$store.getters.weatherInfo.list;
      let averageTemperature = 0;
      for (let i = 8; i <= 15 ; i++) {
        averageTemperature += parseFloat(weatherList[i].main.temp);
      }
      return averageTemperature.toFixed(1);
    },
    averageTemperatureDayAfter(){
      let weatherList = this.$store.getters.weatherInfo.list;
      let averageTemperature = 0;
      for (let i = 16; i <= 23 ; i++) {
        averageTemperature += parseFloat(weatherList[i].main.temp);
      }
      return averageTemperature.toFixed(1);
    },
  },
  beforeCreate() {
     this.$store.dispatch('getWeatherInfo')
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900");
body {
  font-family: 'Montserrat', sans-serif;
  background: #112233;
}

.weather-card {
  margin: 60px auto;
  height: 740px;
  width: 450px;
  background: #fff;
  box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.weather-card .top {
  position: relative;
  height: 570px;
  width: 100%;
  overflow: hidden;
  background: url("http://rostov-gorod.info/upload/iblock/27c/27ca65256444c8fa196164c2a1801af3.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
}
.weather-card .top .wrapper {
  padding: 30px;
  position: relative;
  z-index: 1;
}
.weather-card .top .wrapper .mynav {
  height: 20px;
}
.weather-card .top .wrapper .mynav .lnr {
  color: #fff;
  font-size: 20px;
}
.weather-card .top .wrapper .mynav .lnr-chevron-left {
  display: inline-block;
  float: left;
}
.weather-card .top .wrapper .mynav .lnr-cog {
  display: inline-block;
  float: right;
}
.weather-card .top .wrapper .heading {
  margin-top: 20px;
  font-size: 35px;
  font-weight: 400;
  color: #fff;
}
.weather-card .top .wrapper .location {
  margin-top: 20px;
  font-size: 21px;
  font-weight: 400;
  color: #fff;
}
.weather-card .top .wrapper .temp {
    display: flex;
    justify-content: center;
}
.weather-card .top .wrapper .temp a {
  text-decoration: none;
  color: #fff;
}
.weather-card .top .wrapper .temp a .temp-type {
  font-size: 85px;
}
.weather-card .top .wrapper .temp .temp-value {
  display: inline-block;
  font-size: 85px;
  font-weight: 600;
  color: #fff;
}
.weather-card .top .wrapper .temp .deg {
  display: inline-block;
  font-size: 35px;
  font-weight: 600;
  color: #fff;
  vertical-align: top;
  margin-top: 10px;
}
.weather-card .top:after {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background:#0000009e;
}
.weather-card .bottom {
  padding: 0 30px;
  background: #fff;
}
.weather-card .bottom .wrapper .forecast {
  overflow: hidden;
  margin: 0;
  font-size: 0;
  padding: 0;
  padding-top: 20px;
  max-height: 155px;
}
.weather-card .bottom .wrapper .forecast a {
  text-decoration: none;
  color: #000;
}
.weather-card .bottom .wrapper .forecast .go-up {
  text-align: center;
  display: block;
  font-size: 25px;
  margin-bottom: 10px;
}
.weather-card .bottom .wrapper .forecast li {
  display: block;
  font-size: 25px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.25);
  line-height: 1em;
  margin-bottom: 30px;
}
.weather-card .bottom .wrapper .forecast li .date {
  display: inline-block;
}
.weather-card .bottom .wrapper .forecast li .condition {
  display: inline-block;
  vertical-align: middle;
  display: flex;
  font-size: 25px;
}
.weather-card .bottom .wrapper .forecast li .condition .temp {
  display: inline-block;
  vertical-align: top;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding-top: 2px;
}
.weather-card .bottom .wrapper .forecast li .condition .temp .deg {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  margin-left: 3px;
  vertical-align: top;
}
.weather-card .bottom .wrapper .forecast li .condition .temp .temp-type {
  font-size: 20px;
}
.weather-card .bottom .wrapper .forecast li.active {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.lnr {
  display: flex;
    align-items: center;
    margin-bottom: 0px;
}
img {
  width: 50px;
}
.main-icon {
  width: 100px;
  height: 100px;
}
.desc {
  color: white;
  font-size: 25px;
}
</style>
