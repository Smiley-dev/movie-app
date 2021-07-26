import React, { useState, createContext, Dispatch, SetStateAction } from "react";

interface AppCotextProps {
      isModalOpened: boolean;
      setIsModalOpened: Dispatch<SetStateAction<boolean>>;
      selectedMovie: string;
      setSelectedMovie: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppCotextProps>({
      isModalOpened: false,
      selectedMovie: "",
} as AppCotextProps);

const AppProvider: React.FC = ({ children }) => {
      const [isModalOpened, setIsModalOpened] = useState(false);
      const [selectedMovie, setSelectedMovie] = useState("");

      return (
            <AppContext.Provider
                  value={{
                        isModalOpened,
                        setIsModalOpened,
                        selectedMovie,
                        setSelectedMovie,
                  }}
            >
                  {children}
            </AppContext.Provider>
      );
};

export default AppProvider;
