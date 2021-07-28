import React, { useEffect, useCallback, useState, useContext, useRef } from "react";

//Context
import { AppContext } from "../../context";

//API
import API from "../../API";

import { MovieDetails } from "../../types";

//Components
import Button from "../Button/Button";

//Styles
import { Content, Info } from "./Movie.style";

//Icons
import rottenIcon from "../../assets/icons/rottenLogo.png";
import imdbIcon from "../../assets/icons/imdbLogo.png";
import metacriticIcon from "../../assets/icons/metacritic.png";
import Spinner from "../Spinner/Spinner";

const Movie: React.FC = () => {
      const [movie, setMovie] = useState<MovieDetails>();
      const [loading, setLoading] = useState(false);

      const { selectedMovie, setIsModalOpened, isModalOpened } = useContext(AppContext);

      const ref = useRef<HTMLDivElement>();

      const fetchMovie = useCallback(async () => {
            try {
                  setLoading(true);
                  const movie = await API.fetchMovie(selectedMovie);
                  setMovie(movie);
                  setLoading(false);
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

      return loading ? (
            <Spinner></Spinner>
      ) : (
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
                              {movie?.Ratings.length === 0 ? null : (
                                    <div className="ratings">
                                          <h3>Ratings</h3>
                                          {movie?.Ratings.map((rating) => {
                                                switch (rating.Source) {
                                                      case "Internet Movie Database":
                                                            return (
                                                                  <div key={rating.Source} className="rating">
                                                                        <img src={imdbIcon} alt="imdb" />
                                                                        <p>{rating.Value}</p>
                                                                  </div>
                                                            );
                                                      case "Rotten Tomatoes":
                                                            return (
                                                                  <div key={rating.Source} className="rating">
                                                                        <img src={rottenIcon} alt="RT" />
                                                                        <p>{rating.Value}</p>
                                                                  </div>
                                                            );
                                                      case "Metacritic":
                                                            return (
                                                                  <div key={rating.Source} className="rating">
                                                                        <img src={metacriticIcon} alt="MC" />
                                                                        <p>{rating.Value}</p>
                                                                  </div>
                                                            );
                                                      default:
                                                            return null;
                                                }
                                          })}
                                    </div>
                              )}
                        </div>
                        <Button movie={movie!}></Button>
                        <div className="close-modal">X</div>
                  </Info>
            </Content>
      );
};

export default Movie;
