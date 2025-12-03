import { dataSet } from './weatherData';

const resultContainer = document.querySelector('#weatherResult');

export function displayWeather() {
  resultContainer.innerHTML = '';

  dataSet.forEach((report) => {
    if (!report) {
      resultContainer.textContent = 'No data to display';
      return;
    }
    const card = document.createElement('div');
    card.classList.add('weather-card');

    const celsius = document.createElement('span');
    celsius.textContent = report.celsius;

    const wind = document.createElement('span');
    wind.textContent = report.wind;

    const humidity = document.createElement('p');
    humidity.textContent = report.humidity;

    const percipitation = document.createElement('p');
    percipitation.textContent = report.percipitation;

    const description = document.createElement('p');
    description.textContent = report.description;

    const dateTime = document.createElement('p');
    dateTime.textContent = report.dateTime;

    const address = document.createElement('p');
    address.textContent = report.address;

    card.append(
      celsius,
      wind,
      humidity,
      percipitation,
      description,
      dateTime,
      address
    );

    resultContainer.appendChild(card);
  });
}
