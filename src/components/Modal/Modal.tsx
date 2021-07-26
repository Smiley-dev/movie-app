import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { AppContext } from "../../context";

import { Wrapper } from "./Modal.style";

const Modal: React.FC = ({ children }) => {
      const { isModalOpened } = useContext(AppContext);
      if (!isModalOpened) return null;
      return createPortal(<Wrapper>{children}</Wrapper>, document.body);
};

export default Modal;
