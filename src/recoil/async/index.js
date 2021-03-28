import { selector, selectorFamily } from 'recoil';
import { randomTodoRecoil, todoByIdRecoil } from '../../constants/recoilKeys';

export const randomTodo = selector({
    key: randomTodoRecoil,
    get: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return res.json();
    },
});

export const todoById = selectorFamily({
    key: todoByIdRecoil,
    get: (todoId) => async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

        return res.json();
    },
});
