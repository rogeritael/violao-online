import styled from "styled-components";

export const PageContainer = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .line {
        width: 100vw;
        height: 120px;
        background-color: #D55601;
        position: absolute;
        top: 50%;
        transform: translateY(-57%);
        left: 0;
        z-index: -1;
    }
`