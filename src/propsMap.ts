import { ComponentDataInterface, MapComponentsInterface } from "./types";

export default function propsMap(
  props: ComponentDataInterface["props"],
  mappableProps: ComponentDataInterface["mappableProps"],
  mapComponents: MapComponentsInterface,
): ComponentDataInterface["props"] {
  if (!mappableProps || mappableProps.length === 0) {
    return props;
  }
  if (mappableProps) {
    mappableProps.forEach((mappableProp: string) => {
      if (props) {
        props[mappableProp] = mapComponents[props[mappableProp]];
      }
    });
  }

  return props;
}
