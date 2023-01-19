import React from "react";
import { PositionTitle, MarginTitle, Welcome } from "./style";
import { Text } from "./style";

const Title = ( props ) => {
    return (
        <PositionTitle>
            <MarginTitle>
            <Welcome>Welcome,</Welcome>
            <Text>{props.titletext}</Text>
            </MarginTitle>
        </PositionTitle>
    );
};
export default Title;