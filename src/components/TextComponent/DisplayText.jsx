import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { textState } from "../../recoil/textStates";

const TextInput = () => {
    const text = useRecoilValue(textState);

    return (
        <span>
            This is text:
            <strong>{` ${text}`}</strong>
        </span>
    );
};

export default TextInput;
