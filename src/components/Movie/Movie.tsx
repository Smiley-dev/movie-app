import React, { useEffect, useCallback, useState, useContext } from "react";

import AppProvider, { AppContext } from "../../context";

//API
import API, { MovieDetails } from "../../API";

//Components

//Styles
import { Content, Info } from "./Movie.style";

const Movie: React.FC = () => {
      const [movie, setMovie] = useState<MovieDetails>();
      const { selectedMovie } = useContext(AppContext);
      const fetchMovie = useCallback(async () => {
            try {
                  const movie = await API.fetchMovie(selectedMovie);
                  setMovie(movie);
            } catch (error) {
                  console.log(error);
            }
      }, [selectedMovie]);

      useEffect(() => {
            fetchMovie();
      }, [fetchMovie, selectedMovie]);

      return (
            <Content>
                  <img src={movie?.Poster} alt="Movie poster" />
                  <Info>
                        <h1>{movie?.Title}</h1>
                        <h3>PLOT</h3>
                        <p>{movie?.Plot}</p>
                  </Info>
            </Content>
      );
};

export default Movie;
