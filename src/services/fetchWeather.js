// const OWM_API_KEY = 'cce420b78c35e958844f8e4cd0048d56';
import localforage from 'localforage';
// import weather from '../reducers/weather';

export default function(city) {
  // const url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${OWM_API_KEY}`;

  // const url = `http://api.openweathermap.org/data/2.5/find?lat=55.0415&lon=82.9346&units=metric&appid=${OWM_API_KEY}`;
  const DEG = localStorage.getItem('metric');
  const wsql = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="${DEG}"`;
  // const wsql = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="(${lat},${lon})") and u="${DEG}"`;
  const url = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(wsql)}&format=json`;
  const TTL = 60;
  const Data = (new Date()).getTime();
  const weatherDB = localforage.createInstance({ name: 'forecasts', storeName: 'forecasts' });
  let result;

  weatherDB.getItem(city).then(forecast => {
    if (forecast !== null) {
      if (Data - TTL * 1000 < forecast.time) {
        console.log('ok read DB', forecast);
        result = forecast;
      } else {
        result = undefined;
      }
    }
  }).catch(() => {
    console.log('error read');
  });

  console.log(result);
  console.log(url);
  if (result === undefined) {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.cod === 404) { return []; }
        const Data = (new Date()).getTime();
        const outJSON = { json, TTL, time: Data };


        weatherDB.setItem(city, outJSON);
        return json;
      });
  }
  return result;
}
