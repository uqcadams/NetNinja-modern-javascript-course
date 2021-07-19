// AccuWeather API Key
const key = '5eRSOV2fK8L60JjqVbDHg7DtrTv1zgfy';

const getCity = async (city) => {
  
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity('brisbane')
    .then(data => console.log(data))
    .catch(error => console.log(error));