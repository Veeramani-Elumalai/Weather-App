import { fetchData } from './js/weatherData';
import { displayWeather } from './js/dom';

const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchCity');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  const report = await fetchData(city);

  if (report) {
    displayWeather([report]);
  } else {
    displayWeather([]);
  }
});
