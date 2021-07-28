import styled from "styled-components";

export const Wrapper = styled.div`
      position: relative;
`;

export const Image = styled.img`
      max-width: 720px;
      height: 100%;
      width: 100%;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 20px;
      animation: animateThumb 0.5s;

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
      bottom: 10px;
      right: 10px;
      height: 50px;
      z-index: 100;
`;
