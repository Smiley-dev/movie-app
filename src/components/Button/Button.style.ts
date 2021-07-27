import styled from "styled-components";

type Props = {
      isFavorite: boolean;
};

export const Wrapper = styled.button<Props>`
      padding: 10px;
      border-radius: 5px;
      position: absolute;
      bottom: 0;
      right: 0;
      border: none;
      background-color: ${({ isFavorite }) => (isFavorite ? "var(--red)" : "var(--white)")};
      color: ${({ isFavorite }) => (isFavorite ? "var(--white)" : "var(--red)")};

      &:hover {
            cursor: pointer;
      }
`;
