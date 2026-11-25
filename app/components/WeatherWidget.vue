<script setup>
const { data: weather, pending, error } = await useFetch(
'https://api.weatherapi.com/v1/forecast.json?key=59624a9c62a246e09c6180643221402&q=Fumel&days=1');
</script>

<template>
  <div class="weather-card" :class="$device.isDesktop ? 'max-[200px]' : 'max-w-full'">
    <div v-if="pending">Loading weather...</div>
    <div v-else-if="error">Could not load weather.</div>
    <div v-else class="content">
      <h3>{{ weather.location.name }}, {{ weather.location.country }}</h3>
      <div class="temp">
        {{ Math.round(weather.current.temp_c) }}°C
      </div>
      <p>{{ weather.current.condition.text }}</p>
      <div class="range">
        L: {{ Math.round(weather.forecast.forecastday[0].day.mintemp_c) }}° 
        H: {{ Math.round(weather.forecast.forecastday[0].day.maxtemp_c) }}°
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}
.temp { font-size: 2.5rem; font-weight: bold; }
</style>