const OWM_API_KEY = 'cce420b78c35e958844f8e4cd0048d56';

export default function(city) {
  const url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${OWM_API_KEY}`;

  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if (json.cod === 404) { return []; }

      return json.list.map(listItem => ({
        id: listItem.id,
        city: listItem.name,
        country: listItem.sys.country,
        temp: listItem.main.temp,
        description: listItem.weather[0].main,
        icon: listItem.weather[0].icon
      }));
    });
}
