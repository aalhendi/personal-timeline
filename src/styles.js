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
`;
