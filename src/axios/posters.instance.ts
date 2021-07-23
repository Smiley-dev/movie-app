import axios from "axios";

export const postersInstance = axios.create({
      baseURL: `http://img.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
})