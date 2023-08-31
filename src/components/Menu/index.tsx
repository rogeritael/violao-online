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
                {/* <SunIcon /> */}
                a
            </button>
            <button>
                {/* <ZoomIcon/> */}
                a
            </button>
            <button>
                {/* <VoidHeartIcon /> */}
                a
            </button>
        </MenuContainer>
    )
}