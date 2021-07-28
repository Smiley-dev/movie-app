import React, { useState, createContext, Dispatch, SetStateAction } from "react";

import { MovieDetails } from "./API";

type AppCotextProps = {
      isModalOpened: boolean;
      setIsModalOpened: Dispatch<SetStateAction<boolean>>;
      selectedMovie: string;
      setSelectedMovie: Dispatch<SetStateAction<string>>;
      addMovie: (movie: MovieDetails) => void;
      removeMovie: (imdbID: string) => void;
      checkIfMovieIsInMyList: (imdbID: string | undefined) => boolean;
      myList: MovieDetails[];
};

export const AppContext = createContext<AppCotextProps>({
      isModalOpened: false,
      selectedMovie: "",
} as AppCotextProps);

const AppProvider: React.FC = ({ children }) => {
      const [isModalOpened, setIsModalOpened] = useState(false);
      const [selectedMovie, setSelectedMovie] = useState("");
      const [myList, setMyList] = useState<MovieDetails[]>([]);

      //Add movie to my list
      const addMovie = (movie: MovieDetails) => {
            setMyList([...myList, movie]);
      };

      //Remove movie from my list
      const removeMovie = (imdbID: string) => {
            const newList = myList.filter((movie) => {
                  return movie.imdbID !== imdbID;
            });

            setMyList(newList);
      };

      //Check if movie is in my list
      const checkIfMovieIsInMyList = (imdbID: string | undefined) => {
            return myList.some((movie) => movie.imdbID === imdbID);
      };

      return (
            <AppContext.Provider
                  value={{
                        isModalOpened,
                        setIsModalOpened,
                        selectedMovie,
                        setSelectedMovie,
                        addMovie,
                        removeMovie,
                        checkIfMovieIsInMyList,
                        myList,
                  }}
            >
                  {children}
            </AppContext.Provider>
      );
};

export default AppProvider;
