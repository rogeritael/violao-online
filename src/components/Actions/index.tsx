import { HeartIcon } from "@/assets/icons/heart";
import { ActionsContainer } from "./styles";
import { Button } from "../Button";

interface ActionsProps {

}
export function Actions(props : ActionsProps){
    return(
        <ActionsContainer>
            <HeartIcon />
            <Button value="Tocar Acorde" />
        </ActionsContainer>
    )
}