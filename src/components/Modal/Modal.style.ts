import styled from "styled-components";

export const Wrapper = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      min-height: 100vh;
      min-width: 100vw;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
`;

export const Content = styled.div`
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      ::-webkit-scrollbar {
            width: 0 !important;
      }
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
`;
