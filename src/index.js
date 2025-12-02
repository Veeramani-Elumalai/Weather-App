const dataSet = [];

class weather {
  constructor(
    celsius,
    wind,
    humidity,
    percipitation,
    description,
    dateTime,
    address
  ) {
    this.celsius = celsius;
    this.wind = wind;
    this.humidity = humidity;
    this.percipitation = percipitation;
    this.description = description;
    this.dateTime = dateTime;
    this.address = address;
  }
}

async function fetchData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&contentType=json&key=SQPJWHBH3S69KVJWY4823WBHW`
    );
    const data = await response.json();

    const celsius = data.currentConditions.temp;
    const wind = data.currentConditions.windspeed;
    const humidity = data.currentConditions.humidity;
    const percipitation = data.currentConditions.precip;
    const description = data.description;
    const dateTime = data.currentConditions.datetime;
    const address = data.resolvedAddress;

    const report = new weather(
      celsius,
      wind,
      humidity,
      percipitation,
      description,
      dateTime,
      address
    );
    dataSet.push(report);
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

console.log(dataSet);
