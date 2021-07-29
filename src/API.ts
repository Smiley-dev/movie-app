import { moviesInstance } from "./axios";
import { MovieDetails, Movies } from "./types";

export enum Plot {
      Short = "short",
      Full = "full",
}

const apiSettings = {
      fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
            try {
                  const { data } = await moviesInstance.get("/", {
                        params: {
                              s: searchTerm,
                              page,
                        },
                  });
                  return data;
            } catch (err) {
                  throw new Error(err.message);
            }
      },

      fetchMovie: async (imdbID: string, plot: Plot = Plot.Short): Promise<MovieDetails> => {
            try {
                  const { data } = await moviesInstance.get("/", {
                        params: {
                              i: imdbID,
                              plot,
                        },
                  });

                  return data;
            } catch (err) {
                  throw new Error(err.message);
            }
      },
};

export default apiSettings;
