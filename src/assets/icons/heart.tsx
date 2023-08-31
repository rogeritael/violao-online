interface IconProps {
    isActive?: boolean;
}

export function HeartIcon({ isActive }: IconProps){
    return (
        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="21" cy="21.5" rx="21" ry="21.5" fill={isActive === true ? "#F15252" : "#B8B0A4"} fill-opacity={isActive === true ? "1" : "0.2"}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5047 12.8056C26.3295 6.53285 40.893 17.5095 20.5047 31.6238C0.116284 17.5108 14.6798 6.53285 20.5047 12.8056Z"
            fill="white"/>
        </svg>
    )
}

