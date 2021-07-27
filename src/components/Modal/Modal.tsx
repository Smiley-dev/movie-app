import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { AppContext } from "../../context";

import { Wrapper, Content } from "./Modal.style";

const Modal: React.FC = ({ children }) => {
      const { isModalOpened } = useContext(AppContext);
      if (!isModalOpened) return null;
      return createPortal(
            <Wrapper>
                  <Content>{children}</Content>
            </Wrapper>,
            document.body,
      );
};

export default Modal;
