import React from "react";

//Styles
import { Wrapper, Overlay } from "./Background.style";

type Props = {
      image: string;
      isFull: boolean;
};

const Background: React.FC<Props> = ({ children, image, isFull }) => {
      return (
            <Wrapper isFull={isFull} image={image}>
                  <Overlay>{children}</Overlay>
            </Wrapper>
      );
};

export default Background;
