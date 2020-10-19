import { ComponentDataInterface, MapComponentsInterface } from "./types";

export default function propsMap(
    props: ComponentDataInterface["props"], 
    mappableProps: ComponentDataInterface["mappableProps"], 
    mapComponents: MapComponentsInterface
    ): ComponentDataInterface["props"] {
    if (!mappableProps?.length)
        return props;
    mappableProps.forEach((mappableProps)=>{
        if(props) {
            props[mappableProps] = mapComponents[props[mappableProps]];
        }
    });

    return props;
}