import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.style";
type Props = {
      poster: string;
      isFavorit: boolean;
      imdbID: string;
};

const Thumb: React.FC<Props> = ({ poster, isFavorit, imdbID }) => {
      return (
            <div>
                  <Link to={`/movie/${imdbID}`}>
                        <Image src={poster} alt="movie-thumb" />
                  </Link>
            </div>
      );
};

export default Thumb;
