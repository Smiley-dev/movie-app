import React, { useContext, useRef } from "react";
import { BsStarFill } from "react-icons/bs";
import { AppContext } from "../../context";
import { Movie, MovieDetails } from "../../types";
import { useLocation } from "react-router";
import Button from "../Button/Button";

import { Image, Star, Wrapper, Info } from "./Thumb.style";

type Props = {
      movie: Movie | MovieDetails;
};

const Thumb: React.FC<Props> = ({ movie }) => {
      const { setIsModalOpened, setSelectedMovie, checkIfMovieIsInMyList } = useContext(AppContext);
      const location = useLocation();

      const handleClick = () => {
            setSelectedMovie(movie.imdbID);
            setIsModalOpened(true);
      };

      return (
            <Wrapper onClick={handleClick}>
                  {checkIfMovieIsInMyList(movie.imdbID) && location.pathname === "/" ? (
                        <Star>
                              <BsStarFill fill="#fce301" size="30px"></BsStarFill>
                        </Star>
                  ) : location.pathname === "/my-list" ? (
                        <Button movie={movie as MovieDetails}></Button>
                  ) : null}

                  <Image src={movie.Poster} alt="movie-thumb"></Image>
                  <Info>
                        <h1>{movie.Title}</h1>
                        <h3>{movie.Year}</h3>
                  </Info>
            </Wrapper>
      );
};

export default Thumb;
