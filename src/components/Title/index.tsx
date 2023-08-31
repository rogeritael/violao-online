import { TitleContainer } from "./styles";

interface TitleProps {
    value: string;
}

export function Title({ value } : TitleProps){
    return(
        <TitleContainer>
            { value }
        </TitleContainer>
    )
}