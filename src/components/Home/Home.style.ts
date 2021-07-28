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

      h3 {
            color: var(--red);
            font-size: 40px;
            margin-top: 200px;
            margin: auto;
      }
`;

export const LoadMore = styled.button`
      width: 200px;
      height: 50px;
      margin: 20px auto;
      background: transparent;
      color: var(--white);
      font-size: 1.3rem;
      border: 2px solid var(--lightGrey);
      border-radius: 25px;
      display: block;
      cursor: pointer;
`;
