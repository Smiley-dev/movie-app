import React, { useContext } from "react";
import { MovieDetails } from "../../API";

import { Wrapper } from "./Button.style";

import { AppContext } from "../../context";

type Props = {
      movie: MovieDetails | undefined;
};

const Button: React.FC<Props> = ({ movie }) => {
      const { addMovie, removeMovie, checkIfMovieIsInMyList } = useContext(AppContext);

      const handleAddOrRemove = () => {
            if (!checkIfMovieIsInMyList(movie?.imdbID)) {
                  if (movie) addMovie(movie);
            } else {
                  if (movie) removeMovie(movie.imdbID);
            }
      };

      return (
            <Wrapper onClick={handleAddOrRemove} isFavorite={checkIfMovieIsInMyList(movie?.imdbID)}>
                  {checkIfMovieIsInMyList(movie?.imdbID) ? "Remove from my list" : "Add to my list"}
            </Wrapper>
      );
};

export default Button;
