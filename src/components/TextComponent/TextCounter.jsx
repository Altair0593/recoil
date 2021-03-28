import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from "../../recoil/textStates";

const TextCounter = () => {
    const text = useRecoilValue(charCountState);

    return (
        <span>
            This is char length:
            <strong>{text}</strong>
        </span>
    );
};

export default TextCounter;
