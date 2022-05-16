import styled from "styled-components";

export const OrderButton = styled.button<{ buttonColor: string; buttonHoverColor:string;}>`
    text-decoration: none;
    background: ${({buttonColor})=> (buttonColor)};
    width: 330px;
    height: 50px;
    cursor: pointer;
    font-size: 1.6rem;
    text-align: center;
    padding-top: 10px;
    color: white;
    border-radius: 30px;
    white-space: nowrap;
    padding: 12px 30px;
    border: solid;
    border-color: ${({buttonColor})=> (buttonColor)};
    outline: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({buttonHoverColor})=> (buttonHoverColor)};;
        border-color: ${({buttonHoverColor})=> (buttonHoverColor)};;
    }
`;
