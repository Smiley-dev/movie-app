import React, { useContext } from "react";
import image from "../../assets/images/movies_background.jpg";
import { AppContext } from "../../context";

import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Background from "../Background/Background";

import { Wrapper } from "./MyList.style";

const MyList: React.FC = () => {
      const { myList } = useContext(AppContext);
      return (
            <>
                  <Background isFull={myList.length > 0 ? false : true} image={image}></Background>
                  {myList.length > 0 && (
                        <Wrapper>
                              <Grid>
                                    {myList.map((movie) => (
                                          <Thumb key={movie.imdbID} poster={movie.Poster} imdbID={movie.imdbID} isFavorit={false}></Thumb>
                                    ))}
                              </Grid>
                        </Wrapper>
                  )}
            </>
      );
};

export default MyList;
