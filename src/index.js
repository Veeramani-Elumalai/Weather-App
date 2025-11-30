async function fetchData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&contentType=json&key=SQPJWHBH3S69KVJWY4823WBHW`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#searchForm');
  const input = document.querySelector('#searchCity');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value || '';
    fetchData(city);
  });
});
