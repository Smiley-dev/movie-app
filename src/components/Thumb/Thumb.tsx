import React, { useContext } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { AppContext } from "../../context";

import { Image, Star, Wrapper } from "./Thumb.style";

type Props = {
      poster: string;
      isFavorit: boolean;
      imdbID: string;
};

const Thumb: React.FC<Props> = ({ poster, imdbID }) => {
      const { setIsModalOpened, setSelectedMovie, checkIfMovieIsInMyList } = useContext(AppContext);

      const handleClick = () => {
            setSelectedMovie(imdbID);
            setIsModalOpened(true);
      };
      return (
            <Wrapper onClick={handleClick}>
                  {checkIfMovieIsInMyList(imdbID) ? (
                        <Star>
                              <BsStarFill fill="#e50914" size="35px"></BsStarFill>
                        </Star>
                  ) : null}

                  <Image src={poster} alt="movie-thumb"></Image>
            </Wrapper>
      );
};

export default Thumb;
