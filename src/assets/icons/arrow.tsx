interface IconProps {
    width?: string;
    height?: string;
    color?: string;
}

export function ArrowIcon ({ height, width, color }: IconProps) {
    return (
        <svg className="arrow_icon" width={width ? width : "8"} height={height ? height : "8"} viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.163824 0.163824C0.215622 0.111894 0.277157 0.0706934 0.344903 0.0425818C0.41265 0.0144702 0.485276 -8.48484e-08 0.558623 -9.76728e-08C0.631971 -1.10497e-07 0.704597 0.0144701 0.772344 0.0425817C0.84009 0.0706933 0.901625 0.111894 0.953423 0.163824L7.64495 6.85535C7.69688 6.90714 7.73808 6.96868 7.76619 7.03643C7.7943 7.10417 7.80877 7.1768 7.80877 7.25014C7.80877 7.32349 7.7943 7.39612 7.76619 7.46386C7.73808 7.53161 7.69688 7.59315 7.64495 7.64494L0.953426 14.3365C0.848719 14.4412 0.706705 14.5 0.558626 14.5C0.410547 14.5 0.268533 14.4412 0.163826 14.3365C0.0591186 14.2318 0.000294419 14.0897 0.000294393 13.9417C0.000294367 13.7936 0.0591185 13.6516 0.163826 13.5469L6.46166 7.25015L0.163824 0.953424C0.111894 0.901625 0.070693 0.84009 0.0425814 0.772344C0.0144698 0.704598 1.10497e-07 0.631971 9.76729e-08 0.558624C8.48484e-08 0.485277 0.0144698 0.41265 0.0425814 0.344904C0.0706929 0.277157 0.111894 0.215623 0.163824 0.163824V0.163824Z" fill={color ? color : "#282424"}/>
        </svg>
    )
}
