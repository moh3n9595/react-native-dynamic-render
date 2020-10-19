import React, { PropsWithChildren } from "react";
import DynamicComponent from "../index";
import renderer from "react-test-renderer";
import { Text, View } from "react-native";

const ComponentViewer: React.ComponentType = ({ component }: PropsWithChildren<{ component: React.ComponentType }>): React.ReactElement => {
    const CustomComponent = component;
    return (
        <CustomComponent />
    );
};

const mapComponents = {
    componentViewer: ComponentViewer,
    text: Text,
    view: View,
};

test("1-depth map props renders correctly", () => {

    const props = {
        name: "view",
        children: [
            { 
                name: "componentViewer",
                props: {
                    component: "text"
                },
                mappableProps: ["component"]
            }
        ],
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("1-depth map undefined props renders correctly", () => {

    const props = {
        name: "view",
        mappableProps: ["componentViewer"]
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("1-depth renders correctly", () => {

    const props = {
        name: "view",
        _uid: "123"
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("n-depth renders correctly", () => {

    const props = {
        name: "view",
        _uid: "123",
        children: [
            {
                name: "text",
                _uid: "1234"
            },
            {
                name: "text",
                _uid: "12345",
                props: null
            },
            {
                name: "view",
                _uid: "123456",
                children: [
                    {
                        name: "text",
                        _uid: "1234567",
                        children: "some foo bar",
                        props: {
                            first: "text foo",
                            second: "text bar"
                        }
                    },
                    {
                        name: "text",
                        _uid: "12345678"
                    },

                ],
                props: {
                    first: "view foo",
                    second: "view bar"
                }
            }
        ]
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("1-depth not found component renders correctly", () => {

    const props = {
        name: "foo",
        _uid: "123"
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("n-depth not found component renders correctly", () => {

    const props = {
        name: "view",
        _uid: "123",
        children: [
            {
                name: "text",
                _uid: "1234"
            },
            {
                name: "text",
                _uid: "12345"
            },
            {
                name: "view",
                _uid: "123456",
                children: [
                    {
                        name: "foo",
                        _uid: "1234567"
                    },
                    {
                        name: "text",
                        _uid: "12345678"
                    },

                ]
            }
        ]
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("1-depth without _uid renders correctly", () => {

    const props = {
        name: "view"
    };

    const tree = renderer.create(
        <DynamicComponent
            {...props}
            mapComponents={mapComponents}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
