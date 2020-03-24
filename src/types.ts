export interface ComponentDataInterface {
  props?: any;
  _uid?: string;
  name: string;
  children?: Array<ComponentDataInterface> | string;
}

export type MapComponentsInterface = Record<string, React.ComponentType>;