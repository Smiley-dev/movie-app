import React, { useCallback, useEffect, useState } from "react";

//API
import API from "../../API";

import { Movies, Movie } from "../../types";

//Components
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Background from "../Background/Background";

//Styles
import { Wrapper, LoadMore } from "./Home.style";
import image from "../../assets/images/movies_background.jpg";
import { Spinner } from "../Spinner/Spinner.styles";

const initialState = {
      page: 0,
      Search: [] as Movie[],
      totalResults: 0,
      Response: "True",
      Error: "",
};

const Home: React.FC = () => {
      const [movies, setMovies] = useState<Movies>(initialState);
      const [searchTerm, setSearchTerm] = useState<string>("");
      const [isLoadingMore, setIsLoadingMore] = useState(false);
      const [page, setPage] = useState(1);
      const [error, setError] = useState("");

      const fetchMovies = useCallback(async (search: string, page: number) => {
            try {
                  const movies = await API.fetchMovies(search, page);

                  if (movies.Response === "True") {
                        setMovies((prevState) => ({
                              ...movies,
                              Search: page > 1 ? [...prevState.Search, ...movies.Search] : [...movies.Search],
                        }));
                        setError("");
                  } else {
                        setError(movies.Error);
                  }
            } catch (error) {
                  console.log(error);
            }
      }, []);

      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
            setPage(1);
      };

      //Fetch movies initial
      useEffect(() => {
            if (searchTerm.length > 2) fetchMovies(searchTerm, 1);
            if (searchTerm.length <= 2) setMovies(initialState);
      }, [fetchMovies, searchTerm]);

      //Fetch more movies
      useEffect(() => {
            if (!isLoadingMore) return;

            fetchMovies(searchTerm, page + 1);
            setPage(page + 1);
            setIsLoadingMore(false);
      }, [fetchMovies, searchTerm, isLoadingMore, page, setPage]);

      return (
            <Wrapper>
                  <Background isFull={movies.Search && movies.Search.length > 0 ? false : true} image={image}>
                        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search movies..." />
                  </Background>
                  {error ? (
                        <h3>No movies found</h3>
                  ) : (
                        <Grid>
                              {movies.Search.map((movie) => {
                                    return <Thumb key={movie.imdbID} poster={movie.Poster} isFavorit={false} imdbID={movie.imdbID} />;
                              })}
                        </Grid>
                  )}
                  {isLoadingMore ? <Spinner /> : movies.Search.length < movies.totalResults && error === "" ? <LoadMore onClick={() => setIsLoadingMore(true)}>Load More</LoadMore> : null}
            </Wrapper>
      );
};

export default Home;
