import axios from "axios";

export const postersInstance = axios.create({
      baseURL: `http://img.omdbapi.com/`,
      params: {
            apiKey: process.env.REACT_APP_API_KEY
      }

})