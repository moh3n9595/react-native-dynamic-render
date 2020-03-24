import ComponentMap from "./src/ComponentMap";
import { ComponentDataInterface, MapComponentsInterface } from "./src/types";

export default function DynamicComponent(
  componentData: ComponentDataInterface & {
    mapComponents: MapComponentsInterface;
  },
): React.ReactElement {
  return ComponentMap(componentData);
}
