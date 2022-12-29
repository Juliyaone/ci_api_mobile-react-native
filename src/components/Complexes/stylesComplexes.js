import styled from "styled-components";

export const Content = styled.div`
    padding: 20px;
    display: grid;
    grid-template-rows: 1fr auto;
`;

export const Header = styled.div`
    text-align: center;
    font-size: 30px;
    font-style: italic;
`;

export const Complexes = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
`;

export const ComplexItem = styled.div`
    text-align: center;
    color: red;
    padding: 10px;
`;
