import * as React from 'react';
import DisplayText from "./DisplayText";
import TextCounter from "./TextCounter";
import TextInput from "./TextInput";

const disStyles = { display: "flex", flexDirection: "column" };

const TextComponent = () => (
    <div style={disStyles}>
        <TextInput/>
        <DisplayText/>
        <TextCounter/>
    </div>
);

export default TextComponent;
