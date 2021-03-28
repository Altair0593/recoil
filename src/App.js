import * as React from 'react';
import {
    RecoilRoot,
} from 'recoil';
import TextComponent from "./components/TextComponent";
import TodoList from "./components/TodoList";
import RandomTodoItem from "./components/Asyn/RandomTodoItem";
import TodoById from "./components/Asyn/TodoById";

function App() {
    return (
        <RecoilRoot>
            <TextComponent/>
            <TodoList/>
            <React.Suspense fallback={<div>Loading...</div>}>
                <RandomTodoItem/>
            </React.Suspense>
            <React.Suspense fallback={<div>Loading...</div>}>
                <TodoById/>
            </React.Suspense>
        </RecoilRoot>
    );
}

export default App;
