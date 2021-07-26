import styled from "styled-components";

export const Wrapper = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      z-index: 100;
`;

export const Content = styled.div`
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      max-width: var(--maxWidth);

      a {
            font-family: var(--logoFont);
            font-size: 30px;
            color: var(--red);
            text-decoration: none;
      }
`;
