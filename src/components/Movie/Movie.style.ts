import styled from "styled-components";

export const Content = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      max-width: var(--maxWidth);
      width: 70%;

      margin: 0 auto;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      padding-bottom: 20px;
      color: var(--lightGrey);

      .poster {
            width: 100%;
      }

      .close-modal {
            position: absolute;
            display: flex;
            height: 30px;
            width: 30px;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--red);
            padding: 5px;
            border-radius: 50%;
            top: 20px;
            right: 30px;
            font-weight: bolder;
            color: var(--red);
      }

      .close-modal:hover {
            cursor: pointer;
      }

      @media screen and (max-width: 700px) {
            width: 80%;
            .close-modal {
                  height: 20px;
                  width: 20px;
                  font-size: 10px;
                  top: 10px;
                  right: 10px;
            }
      }
`;

export const Header = styled.div`
      margin-left: 20px;
      margin-bottom: 20px;
      max-width: 80%;
      h1 {
            margin-bottom: 5px;
      }

      @media screen and (max-width: 700px) {
            h1 {
                  font-size: 20px;
            }
            p {
                  font-size: 15px;
            }
      }
`;

export const Info = styled.div`
      width: 100%;
      padding: 20px 40px;

      .rating-directors {
            display: flex;
            justify-content: flex-start;
      }

      .detail {
            font-size: 1rem;
            margin-left: 10px;
            font-weight: normal;
      }

      .ratings {
            display: flex;
            flex-direction: column;
            justify-content: center;
      }

      .rating {
            display: flex;
            align-items: center;
            width: 200px;
            justify-content: space-between;
            margin-bottom: 20px;
      }

      @media screen and (max-width: 800px) {
            h3 {
                  font-size: 17px;
            }

            .detail {
                  font-size: 15px;
            }

            p {
                  font-size: 15px;
            }

            img {
                  height: 30px;
            }
      }
`;
