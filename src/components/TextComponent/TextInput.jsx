import * as React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../recoil/textStates';

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    
    const handleChangeText = ({ target: { value } }) => setText(value);
    
    return <input type="text" value={text} onChange={handleChangeText}/>;
};

export default TextInput;
