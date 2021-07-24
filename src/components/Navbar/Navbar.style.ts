import styled from "styled-components";

export const Wrapper = styled.div`
      position: sticky;
      top: 0;
      left: 0;
      height: 40px;
      
      background: var(--darkGrey);
      
      z-index: 100
`

export const Content = styled.div`
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      max-width: var(--maxWidth);

      a {   
            
            color: var(--white);
            text-decoration: none;
            
      }
`