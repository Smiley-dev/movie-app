import styled from "styled-components";

type Props = {
      isFavorite: boolean;
};

export const Wrapper = styled.button<Props>`
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 150px;
      height: 30px;
      background: transparent;
      border: 2px solid ${({ isFavorite }) => (isFavorite ? "var(--red)" : "var(--lightGrey)")};
      border-radius: 25px;
      color: ${({ isFavorite }) => (isFavorite ? "var(--red)" : "var(--lightGrey)")};

      &:hover {
            cursor: pointer;
      }

      @media screen and (max-width: 500px) {
            width: 120px;
            height: 30px;
            font-size: 10px;
      }
`;
