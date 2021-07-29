import styled from "styled-components";

export const Wrapper = styled.div`
      input {
            width: 50%;
            height: 50px;
            outline: none;
            padding-left: 20px;
            font-size: 20px;
      }

      input:focus {
            border: 1px solid var(--red);
      }
`;

export const Pages = styled.div`
      max-width: 90%;
      max-width: var(--maxWidth);
      display: flex;
      justify-content: space-between;
      margin: auto;
      button {
            width: 200px;
            height: 50px;
            background: transparent;
            color: var(--white);
            font-size: 1.3rem;
            border: 2px solid var(--lightGrey);
            border-radius: 25px;
            display: block;
            cursor: pointer;
      }
`;
