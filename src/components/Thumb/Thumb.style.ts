import styled from "styled-components";

export const Wrapper = styled.div`
      position: relative;
      width: 90%;
      margin: 20px auto;
      max-width: var(--maxWidth);
      background: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      display: flex;
      color: var(--lightGrey);

      :hover {
            background: rgba(0, 0, 0, 0.4);
            cursor: pointer;
      }
`;

export const Info = styled.div`
      margin-left: 20px;
      color: var(--lightGrey);
      h1 {
            font-size: 30px;
      }

      h3 {
            font-size: 20px;
      }

      @media screen and (max-width: 700px) {
            h1 {
                  font-size: 20px;
            }

            h3 {
                  font-size: 15px;
            }
      }
`;

export const Image = styled.img`
      height: 200px;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 20px;
      animation: animateThumb 0.5s;
      max-width: 170px;
      @media screen and (max-width: 700px) {
            height: 150px;
      }

      @keyframes animateThumb {
            from {
                  opacity: 0;
            }
            to {
                  opacity: 1;
            }
      }

      :hover {
            opacity: 0.8;
            cursor: pointer;
      }
`;

export const Star = styled.div`
      position: absolute;
      bottom: 0;
      right: 20px;
      height: 50px;
      z-index: 100;
`;
