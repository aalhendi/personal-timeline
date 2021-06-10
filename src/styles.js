import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor}
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #FFFFFF;
    font-size: 48px;
`;

export const eTitle = styled.h2`
    text-aligh: left;
    color: white
`

export const eDesc = styled.h4`
    text-align: center;
    color: yellow;
`

export const eDate = styled.h5`
    text align: cener;
    color: red;
`
