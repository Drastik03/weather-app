import axios from "axios";
export const fetchApiWeather = async (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const keyApi = import.meta.env.VITE_APP_API_KEY;
  const apiUrl = `${url}${city}&appid=${keyApi}`;
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    console.log(keyApi);
    return response.data;
  } catch (error) {
    console.log("Error en llamada API Weather", error);
  }
};
