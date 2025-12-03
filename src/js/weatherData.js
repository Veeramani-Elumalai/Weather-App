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
  if (!city) return;

  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&contentType=json&key=SQPJWHBH3S69KVJWY4823WBHW`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API returned ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    const celsius = data?.currentConditions.temp;
    const wind = data?.currentConditions.windspeed;
    const humidity = data?.currentConditions.humidity;
    const percipitation = data?.currentConditions.precip;
    const description = data?.description;
    const dateTime = data?.currentConditions.datetime;
    const address = data?.resolvedAddress;

    const report = new weather(
      celsius,
      wind,
      humidity,
      percipitation,
      description,
      dateTime,
      address
    );
    dataSet[0] = report;
    return report;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export { dataSet, fetchData };
