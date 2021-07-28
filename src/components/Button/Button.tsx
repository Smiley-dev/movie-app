import React, { useContext } from "react";
import { MovieDetails } from "../../API";

import { Wrapper } from "./Button.style";

import { AppContext } from "../../context";

type Props = {
      movie: MovieDetails;
};

const Button: React.FC<Props> = ({ movie }) => {
      const { addMovie, removeMovie, checkIfMovieIsInMyList, setIsModalOpened } = useContext(AppContext);

      const handleAddOrRemove = () => {
            if (!checkIfMovieIsInMyList(movie?.imdbID)) {
                  if (movie) addMovie(movie);
            } else {
                  if (movie) removeMovie(movie.imdbID);
            }
            setIsModalOpened(false);
      };

      return (
            <Wrapper onClick={handleAddOrRemove} isFavorite={checkIfMovieIsInMyList(movie?.imdbID)}>
                  {checkIfMovieIsInMyList(movie?.imdbID) ? "Remove from my list" : "Add to my list"}
            </Wrapper>
      );
};

export default Button;
