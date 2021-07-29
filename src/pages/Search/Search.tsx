import React, { useCallback, useEffect, useState, useContext } from "react";

//Context
import { AppContext } from "../../context";

//API
import API from "../../API";

//Hooks
import { useDebounce } from "../../hooks";

//Types
import { Movies, Movie } from "../../types";

//Components
import Thumb from "../../components/Thumb/Thumb";
import Background from "../../components/Background/Background";

//Styles
import { Wrapper, Pages } from "./Search.style";
import image from "../../assets/images/movies_background.jpg";

const initialState = {
      page: 0,
      Search: [] as Movie[],
      totalResults: 0,
      Response: "True",
      Error: "",
};

const Search: React.FC = () => {
      const [movies, setMovies] = useState<Movies>(initialState);
      const [searchTerm, setSearchTerm] = useState<string>("");
      const [page, setPage] = useState(1);
      const { error, setError } = useContext(AppContext);

      const debouncedSearch = useDebounce(searchTerm, 300);

      const fetchMovies = useCallback(
            async (search: string, page: number) => {
                  try {
                        const movies = await API.fetchMovies(search, page);
                        if (movies.Response === "True") {
                              setMovies(movies);
                              setError("");
                        } else {
                              setError(movies.Error);
                              setMovies(initialState);
                        }
                  } catch (error) {
                        setError(error.message);
                        setMovies(initialState);
                  }
            },
            [setError],
      );

      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
            setPage(1);
      };

      //Fetch movies initial
      useEffect(() => {
            if (debouncedSearch.length > 2) fetchMovies(debouncedSearch, 1);
            if (debouncedSearch.length <= 2) {
                  setMovies(initialState);
                  setError("");
            }
      }, [fetchMovies, searchTerm, setError, debouncedSearch]);

      const handleNextPage = () => {
            fetchMovies(debouncedSearch, page + 1);
            setPage(page + 1);
            window.scrollTo({
                  top: 0,
                  behavior: "smooth",
            });
      };

      const handlePrevPage = () => {
            fetchMovies(debouncedSearch, page - 1);
            setPage(page - 1);
            window.scrollTo({
                  top: 0,
                  behavior: "smooth",
            });
      };

      return (
            <Wrapper>
                  <Background isFull={debouncedSearch.length > 2 || error !== "" ? false : true} image={image}>
                        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search movies..." />
                  </Background>
                  {error ? (
                        <h3 className="error">{error}</h3>
                  ) : (
                        movies.Search.map((movie) => {
                              return <Thumb key={movie.imdbID} movie={movie} />;
                        })
                  )}
                  {movies.Search.length > 0 ? (
                        <Pages>
                              {page > 1 && <button onClick={handlePrevPage}>Back</button>}
                              <div></div>
                              {page * 10 <= movies.totalResults && <button onClick={handleNextPage}>Next</button>}
                        </Pages>
                  ) : null}
            </Wrapper>
      );
};

export default Search;
