import React from "react";
import { Text } from "react-native";
import { ComponentDataInterface, MapComponentsInterface } from "./types";

// @ts-ignore
import uuid from "react-uuid";

export default function ComponentMap(componentData: ComponentDataInterface & { mapComponents: MapComponentsInterface }): React.ReactElement {
    if (typeof componentData.mapComponents[componentData.name] !== "undefined") {
        const CustomComponent: React.ComponentType = componentData.mapComponents[componentData.name];
        return (
            <CustomComponent
                {...componentData.props}
                key={componentData._uid || uuid()}
            >
                {typeof componentData.children === "string" && componentData.children}
                {(componentData.children && Array.isArray(componentData.children)) && componentData.children.map((child: ComponentDataInterface) => ComponentMap({ ...child, mapComponents: componentData.mapComponents }))}
            </CustomComponent>
        );

    }

    const notFoundTxt = `The component ${componentData.name} has not been created yet.`;
    console.warn(notFoundTxt);
    return React.createElement(
        () => <Text>{notFoundTxt}</Text>,
        { key: componentData._uid }
    );

}