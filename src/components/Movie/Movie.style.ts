import styled from "styled-components";

export const Content = styled.div`
      display: flex;
      position: relative;
      max-width: var(--maxWidth);
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 20px;

      @media screen and (max-width: 768px) {
            display: block;
            max-height: none;
      }

      .close-modal {
            position: absolute;
            top: 20px;
            right: 50px;
            font-weight: bolder;
            color: var(--red);
      }

      .close-modal:hover {
            cursor: pointer;
      }
`;

export const Info = styled.div`
      width: 100%;
      padding: 20px 40px;
      color: var(--white);
      overflow: hidden;

      .rating-directors {
            display: flex;
            justify-content: flex-start;
      }

      .details {
            display: flex;
      }

      .ratings {
            margin-left: 100px;
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

      img {
            height: 30px;
      }

      h1 {
            @media screen and (max-width: 768px) {
                  font-size: var(--fontBig);
            }
      }
`;
