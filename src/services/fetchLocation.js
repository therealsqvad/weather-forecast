export default async() => {
  if (navigator.geolocation) {
    // Передаем две функции
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position), reject()
      );
    });

    try {
      const position = await promise;

      console.log(position);
      return { lat: position.coords.latitude, lon: position.coords.longitude };
    } catch (e) {
      const response = await fetch('http://api.sypexgeo.net/json/');
      const json = await response.json();

      console.log(json);
      return { lat: json.city.lat, lon: json.city.lon };
    }
  }
};
