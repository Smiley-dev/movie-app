import React, { useCallback, useEffect, useState } from "react";

//API
import API, { Movies } from "../../API";

//Components
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Background from "../Background/Background";

//Styles
import { Wrapper } from "./Home.style";
import image from "../../assets/images/movies_background.jpg";

const Home: React.FC = () => {
      const [movies, setMovies] = useState<Movies>();
      const [searchTerm, setSearchTerm] = useState<string>("");

      const fetchMovies = useCallback(async (search: string) => {
            try {
                  const movies = await API.fetchMovies(search, 1);
                  setMovies(movies);
            } catch (error) {
                  console.log(error);
            }
      }, []);

      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
      };

      //Fetch search results
      useEffect(() => {
            fetchMovies(searchTerm);
      }, [fetchMovies, searchTerm]);

      return (
            <Wrapper>
                  <Background isFull={movies?.Search && movies?.Search.length > 0 ? true : false} image={image}>
                        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search movies..." />
                  </Background>
                  <Grid>
                        {movies?.Search &&
                              movies?.Search.map((movie) => {
                                    return <Thumb poster={movie.Poster} isFavorit={false} imdbID={movie.imdbID} />;
                              })}
                  </Grid>
            </Wrapper>
      );
};

export default Home;
