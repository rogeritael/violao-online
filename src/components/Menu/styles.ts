import styled from "styled-components";

export const MenuContainer = styled.nav`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: #404041;
    width: 70px;
    height: calc(50vh - 68px);
    justify-content: space-between;
    padding: 14px 0;

    button {
        background-color: transparent;
        border: none;
        width: 100%;
        aspect-ratio: 1/1;
        cursor: pointer;
    }
`;