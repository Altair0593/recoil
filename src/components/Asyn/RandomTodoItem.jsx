import * as React from 'react';
import { useRecoilValue } from "recoil";
import { randomTodo } from '../../recoil/async';

const RandomTodoItem = () => {
    const todoItem = useRecoilValue(randomTodo);
    return <div>{JSON.stringify(todoItem)}</div>;
};

export default RandomTodoItem;
