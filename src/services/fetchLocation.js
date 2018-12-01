// eslint-disable-next-line consistent-return
export default async() => {
  if (navigator.geolocation) {
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position), reject()
      );
    });

    try {
      const position = await promise;

      return { lat: position.coords.latitude, lon: position.coords.longitude };
    } catch (e) {
      const response = await fetch('http://api.sypexgeo.net/json/');
      const json = await response.json();

      return { lat: json.city.lat, lon: json.city.lon };
    }
  }
};
