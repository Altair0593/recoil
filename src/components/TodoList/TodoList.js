import * as React from 'react';
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from '../../recoil/todoListStates';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    
    return (
        todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem}/>
        ))
    );
};

export default TodoList;
