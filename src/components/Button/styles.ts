import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    gap: 44px;
    align-items: center;
    height: 44px;
    background-color: transparent;
    border: 2px solid #fff;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 2px;
    border-radius: 20px;
    cursor: pointer;

    .rounded_arrow_container {
        background-color: #fff;
        border-radius: 50%;
        height: 33px;
        aspect-ratio: 1/1;
        display: grid;
        place-items: center;
    }
`