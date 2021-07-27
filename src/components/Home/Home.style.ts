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
