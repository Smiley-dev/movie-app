import axios from "axios";

export const moviesInstance = axios.create({
      baseURL: `https://www.omdbapi.com/`,
      params: {
            apiKey: process.env.REACT_APP_API_KEY,
      },
});
