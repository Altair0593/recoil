import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/todoListStates';

let id = 0;
const getId = () => {
    return id += 1;
};

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = React.useState('');
    const setTodoList = useSetRecoilState(todoListState);
    
    const handleAddItem = () => {
        setTodoList(((prevTodos) => [
            ...prevTodos,
            { id: getId(), text: inputValue, isComplete: false },
        ]));
        setInputValue("");
    };

    const handleChange = ({ target: { value } }) => setInputValue(value);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
};

export default TodoItemCreator;
