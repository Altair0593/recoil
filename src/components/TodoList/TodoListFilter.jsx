import * as React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../recoil/todoListStates';

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="SHOW_ALL">All</option>
                <option value="SHOW_COMPLETED">Completed</option>
                <option value="SHOW_UNCOMPLETED">Uncompleted</option>
            </select>
        </>
    );
};

export default TodoListFilters;
