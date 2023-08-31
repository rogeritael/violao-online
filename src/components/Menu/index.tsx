import { ZoomIcon } from "@/assets/icons/zoom";
import { MenuContainer } from "./styles";
import { VoidHeartIcon } from "@/assets/icons/void_heart";
import { SunIcon } from "@/assets/icons/sun";

interface MenuProps {

}
export function Menu(props : MenuProps){
    return(
        <MenuContainer>
            <button>
                acordes
            </button>
            <button>
                zoom +
            </button>
            <button>
                favs
            </button>
        </MenuContainer>
    )
}