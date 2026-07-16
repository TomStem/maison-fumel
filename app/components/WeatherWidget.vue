<script setup>
// Fumel, France coordinates
const lat = 44.50;
const lon = 0.97;

const { data: weather, pending, error } = await useFetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
);
</script>

<template>
  <div class="weather-card" :class="$device.isDesktop ? 'max-[200px]' : 'max-w-full'">
    <div v-if="pending">Loading weather...</div>
    <div v-else-if="error">Could not load weather.</div>
    <div v-else class="content">
      <h3>Fumel, France</h3>
      <div class="temp">
        {{ Math.round(weather.current_weather.temperature) }}°C
      </div>
      <p>{{ weather.current_weather.weathercode }} - Clear Sky</p>
      <div class="range">
        L: {{ Math.round(weather.daily.temperature_2m_min[0]) }}° 
        H: {{ Math.round(weather.daily.temperature_2m_max[0]) }}°
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