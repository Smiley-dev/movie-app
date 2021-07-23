import axios from "axios";

export const moviesInstance = axios.create({
      baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
})