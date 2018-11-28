import localforage from 'localforage';

export default function(city, date) {
  let DEG = localStorage.getItem('metric');

  if (DEG === null) {
    DEG = 'C';
  }
  const wsql = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="${DEG}"`;
  const url = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(wsql)}&format=json`;
  const TTL = localStorage.getItem('TTL');
  const Data = (new Date()).getTime();
  const weatherDB = localforage.createInstance({ name: 'forecasts', storeName: 'forecasts' });
  let result;

  weatherDB.getItem(city).then(forecast => {
    if (forecast !== null) {
      if (Data - TTL * 1000 < forecast.time) {
        result = forecast;
      } else {
        result = undefined;
      }
    }
  }).catch(() => {
  });

  if (result === undefined) {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.cod === 404) { return []; }
        const time = (new Date()).getTime();
        const outJSON = { json, TTL, time };
        const JSONparsed = json.query.results.channel;

        const d1 = new Date(date);
        const d2 = new Date();
        let i = 0;

        if (d1.getDate() !== d2.getDate()) {
          const timeDiff = Math.abs(d2.getTime() - d1.getTime());

          i = Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        weatherDB.setItem(city, outJSON);

        return {
          city: JSONparsed.location.city,
          country: JSONparsed.location.country,
          temp: JSONparsed.item.condition.temp,
          icon: JSONparsed.item.condition.code,
          latitude: JSONparsed.item.lat,
          longitude: JSONparsed.item.long,
          dayMax: JSONparsed.item.forecast[i].high,
          dayMin: JSONparsed.item.forecast[i].low,
          dayCode: JSONparsed.item.forecast[i].code
        };
      });
  }
  return result;
}
