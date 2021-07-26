import styled from "styled-components";

type Props = {
      image: string | undefined;
      isFull: boolean;
};

export const Wrapper = styled.div<Props>`
      height: 100vh;
      max-height: ${({ isFull }) => (isFull ? "100vh" : "200px")};
      transition: max-height 0.5s ease-out;
      background-image: url(${({ image }) => image});
`;

export const Overlay = styled.div`
      width: 100%;
      background: linear-gradient(to bottom, rgba(28, 28, 28, 1) 0%, rgba(28, 28, 28, 0) 50%, rgba(28, 28, 28, 1) 100%);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
`;
