import React, { useContext } from "react";
import { MovieDetails } from "../../types";

import { Wrapper } from "./Button.style";

import { AppContext } from "../../context";

type Props = {
      movie: MovieDetails;
};

const Button: React.FC<Props> = ({ movie }) => {
      const { addMovie, removeMovie, checkIfMovieIsInMyList, setIsModalOpened } = useContext(AppContext);

      const handleAddOrRemove = (e: any) => {
            if (!checkIfMovieIsInMyList(movie?.imdbID)) {
                  if (movie) addMovie(movie);
            } else {
                  if (movie) removeMovie(movie.imdbID);
            }

            setIsModalOpened(false);
      };

      return (
            <Wrapper
                  onClick={(e) => {
                        e.stopPropagation();
                        handleAddOrRemove(e);
                  }}
                  isFavorite={checkIfMovieIsInMyList(movie?.imdbID)}
            >
                  {checkIfMovieIsInMyList(movie?.imdbID) ? "Remove from my list" : "Add to my list"}
            </Wrapper>
      );
};

export default Button;
