import { ComponentDataInterface, MapComponentsInterface } from "./types";

export default function propsMap(
    props: ComponentDataInterface["props"], 
    mappableProps: ComponentDataInterface["mappableProps"], 
    mapComponents: MapComponentsInterface
    ): ComponentDataInterface["props"] {
    if (!mappableProps?.length)
        return props;
    mappableProps.forEach((mappableProp)=>{
        if(props) {
            props[mappableProp] = mapComponents[props[mappableProp]];
        }
    });

    return props;
}