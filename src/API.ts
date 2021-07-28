import { moviesInstance } from "./axios";
import { MovieDetails, Movies } from "./types";

export enum Plot {
      Short = "short",
      Full = "full",
}

const apiSettings = {
      fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
            const { data } = await moviesInstance.get("/", {
                  params: {
                        s: searchTerm,
                        page,
                  },
            });

            return data;
      },

      fetchMovie: async (imdbID: string, plot: Plot = Plot.Full): Promise<MovieDetails> => {
            const { data } = await moviesInstance.get("/", {
                  params: {
                        i: imdbID,
                        plot,
                  },
            });

            return data;
      },
};

export default apiSettings;
