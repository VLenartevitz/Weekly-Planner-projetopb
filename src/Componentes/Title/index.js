import React from "react";
import { PositionTitle, MarginTitle, Welcome } from "./style";
import { Text } from "./style";

const Title = ( props ) => {
    return (
        <PositionTitle>
            <MarginTitle>
            <Welcome>Welcome</Welcome>
            <Text>Please, register to continue</Text>
            </MarginTitle>
        </PositionTitle>
    );
};
export default Title;