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

      .error {
            text-align: center;
            font-size: 2rem;
            color: var(--red);
      }

      @media screen and (max-width: 700px) {
            input {
                  width: 80%;
                  height: 40px;
                  font-size: 18px;
            }
      }
`;

export const Pages = styled.div`
      width: 90%;
      max-width: var(--maxWidth);
      display: flex;
      justify-content: space-between;
      margin: auto;
      margin-bottom: 20px;
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

      @media screen and (max-width: 500px) {
            button {
                  width: 100px;
                  height: 30px;
                  font-size: 0.8rem;
            }
      }
`;
