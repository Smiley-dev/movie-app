import React, { useContext } from "react";
import image from "../../assets/images/movies_background.jpg";

//Context
import { AppContext } from "../../context";

//Components
import Thumb from "../Thumb/Thumb";
import Background from "../Background/Background";

//Styles
import { Wrapper } from "./MyList.style";

const MyList: React.FC = () => {
      const { myList } = useContext(AppContext);
      return (
            <>
                  <Background isFull={myList.length > 0 ? false : true} image={image}></Background>
                  {myList.length > 0 && (
                        <Wrapper>
                              {myList.map((movie) => (
                                    <Thumb key={movie.imdbID} movie={movie}></Thumb>
                              ))}
                        </Wrapper>
                  )}
            </>
      );
};

export default MyList;
