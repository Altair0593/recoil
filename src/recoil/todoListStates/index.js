import { atom, selector } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [],
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'SHOW_ALL',
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
        case 'SHOW_COMPLETED':
            return list.filter((item) => item.isComplete);
        case "SHOW_UNCOMPLETED":
            return list.filter((item) => !item.isComplete);
        default:
            return list;
        }
    },
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});
