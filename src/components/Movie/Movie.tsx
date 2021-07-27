import React, { useEffect, useCallback, useState, useContext, useRef } from "react";

//Context
import { AppContext } from "../../context";

//API
import API, { MovieDetails } from "../../API";

//Styles
import { Content, Info } from "./Movie.style";

import rottenIcon from "../../assets/icons/rottenLogo.png";
import imdbIcon from "../../assets/icons/imdbLogo.png";

const Movie: React.FC = () => {
      const [movie, setMovie] = useState<MovieDetails>();
      const { selectedMovie, setIsModalOpened, isModalOpened } = useContext(AppContext);

      const ref = useRef<HTMLDivElement>();

      const fetchMovie = useCallback(async () => {
            try {
                  const movie = await API.fetchMovie(selectedMovie);
                  setMovie(movie);
            } catch (error) {
                  console.log(error);
            }
      }, [selectedMovie]);

      //Close modal when cliked outside
      useEffect(() => {
            const checkIfClickedOutside = (e: any) => {
                  if (isModalOpened && ref.current && !ref.current?.contains(e.target)) {
                        setIsModalOpened(false);
                  }
            };
            document.addEventListener("mousedown", checkIfClickedOutside);

            return () => {
                  document.removeEventListener("mousedown", checkIfClickedOutside);
            };
      }, [isModalOpened, setIsModalOpened]);

      useEffect(() => {
            fetchMovie();
      }, [fetchMovie, selectedMovie]);

      return (
            <Content ref={ref as any}>
                  <img src={movie?.Poster} alt="Movie poster" />
                  <Info>
                        <h1>{movie?.Title}</h1>
                        <h3>PLOT</h3>
                        <p>{movie?.Plot}</p>
                        <div className="details">
                              <div>
                                    <h3>Director</h3>
                                    <p>{movie?.Director}</p>
                                    <h3>Actors</h3>
                                    <p>{movie?.Actors}</p>
                              </div>
                              <div className="ratings">
                                    <h3>Ratings</h3>
                                    <div className="rating">
                                          <img src={imdbIcon} alt="" />
                                          <p>{movie?.Ratings[0].Value}</p>
                                    </div>
                                    <div className="rating">
                                          <img src={rottenIcon} alt="" />
                                          <p>{movie?.Ratings[1].Value}</p>
                                    </div>
                              </div>
                        </div>
                        <div className="close-modal">X</div>
                  </Info>
            </Content>
      );
};

export default Movie;
