import * as React from 'react';
import { useRecoilValue } from "recoil";
import { todoById } from '../../recoil/async';

const TodoById = () => {
    const [state, setState] = React.useState({ 
        value: "", todoId: 1,
    });
    const todo = useRecoilValue(todoById(state.todoId));
    
    const handleChange = ({ target: { value } }) => {
        setState(((prevState) => ({ ...prevState, value })));
    };
    
    const handleSetTodoId = () => setState((prevState) => ({ ...prevState, todoId: prevState.value }));

    return (
        <div>
            <div>{JSON.stringify(todo)}</div>
            <input type="text" value={state.value} onChange={handleChange}/>
            <button type="button" onClick={handleSetTodoId}>Set Todo id</button>
        </div>
    );
};

export default TodoById;
