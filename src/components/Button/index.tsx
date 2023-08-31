import { ArrowIcon } from "@/assets/icons/arrow";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    value: string;
}

export function Button({ value } : ButtonProps){
    return(
        <ButtonContainer>
            <span>{ value }</span>
            <figure className="rounded_arrow_container">
                <ArrowIcon width="7" height="14" />
            </figure>
        </ButtonContainer>
    )
}