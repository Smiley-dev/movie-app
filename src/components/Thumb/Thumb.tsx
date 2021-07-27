import React, { useContext } from "react";

import { AppContext } from "../../context";

import { Image } from "./Thumb.style";
type Props = {
      poster: string;
      isFavorit: boolean;
      imdbID: string;
};

const Thumb: React.FC<Props> = ({ poster, isFavorit, imdbID }) => {
      const { setIsModalOpened, setSelectedMovie } = useContext(AppContext);

      const handleClick = () => {
            setSelectedMovie(imdbID);
            setIsModalOpened(true);
      };
      return (
            <div onClick={handleClick}>
                  <Image src={poster} alt="movie-thumb" />
            </div>
      );
};

export default Thumb;