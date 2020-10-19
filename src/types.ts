export interface ComponentDataInterface {
  props?: Record<string, any>;
  mappableProps?: Array<keyof ComponentDataInterface["props"]>;
  _uid?: string;
  name: string;
  children?: Array<ComponentDataInterface> | string;
}

export type MapComponentsInterface = Record<string, React.ComponentType>;