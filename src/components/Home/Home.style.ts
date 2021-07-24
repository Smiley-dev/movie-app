import styled from "styled-components";
import image from "../../assets/images/movies_background.jpg"

export const Wrapper = styled.div`
      
`

export const Search = styled.div`
      position: absolute;
      width: 100%;
      background: linear-gradient(to bottom, rgba(28, 28, 28, 1) 0%, rgba(28, 28, 28, 0) 50%  , rgba(28, 28, 28, 1) 100%);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      input{
            width: 50%;
            height: 50px;
            border-radius: 10px;
            font-size: 20px;
            padding-left: 20px;
            outline: none;
      }

      
`

export const SearchBackground = styled.div`
      position: relative;
      height: calc(100vh - 40px);
      background-image: url(${image});

`