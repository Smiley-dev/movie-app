import React from "react";

import { Wrapper, Content } from "./Grid.style";

const Grid: React.FC = ({ children }) => {
      return (
            <Wrapper>
                  <Content>{children}</Content>
            </Wrapper>
      );
};

export default Grid;
