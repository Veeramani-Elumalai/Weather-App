import { dataSet } from './weatherData';

const resultContainer = document.querySelector('#weatherResult');

export async function displayWeather() {
  resultContainer.innerHTML = '';

  const loadingEl = document.createElement('div');
  loadingEl.className = 'loading';
  loadingEl.textContent = 'Loading...';
  resultContainer.appendChild(loadingEl);

  await new Promise((resolve) => setTimeout(resolve, 500));

  resultContainer.innerHTML = '';

  dataSet.forEach((report) => {
    if (!report) {
      resultContainer.textContent = 'No data to display';
      return;
    }
    const card = document.createElement('div');
    card.classList.add('weather-card');

    const celsius = document.createElement('span');
    celsius.textContent = `Celcius :${report.celsius} °C`;

    const wind = document.createElement('span');
    wind.textContent = `Windspeed :${report.wind} km/h`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity :${report.humidity} %`;

    const percipitation = document.createElement('p');
    percipitation.textContent = `Percipitation :${report.percipitation} %`;

    const description = document.createElement('p');
    description.textContent = `Description :${report.description}`;

    const address = document.createElement('p');
    address.textContent = `Location :${report.address}`;

    card.append(celsius, humidity, wind, percipitation, description, address);

    resultContainer.appendChild(card);
  });
}
