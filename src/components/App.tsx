import { setConstantValue } from 'typescript'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo';
import { useEffect, useState } from 'react'
import { getValue } from '@testing-library/user-event/dist/types/utils';
import { FilterLink } from './FilterLink';

export type todo = {
    text: string,
    isCompleted: boolean
};
export type filter = {
    all: 'ALL',
    completed: 'COMPLETED',
    active: 'ACTIVE'
}
const App = () => {
    const [todos, setTodos] = useState<Array<todo>>([]);
    const [todoToShow, setTodoToshow] = useState<Array<todo>>([]);
    const onAddTodo = (value: string) => {
        setTodos(pre => {
            let newTodo = {text: value, isCompleted: false};
            if(!pre) {
                return [newTodo];
            }
            return [...pre, newTodo];
        })
    }
    const onToggleState = (index: number) => {
        setTodos(pre => {
            let temp = JSON.parse(JSON.stringify(pre));
            temp[index].isCompleted = !temp[index].isCompleted;
            return temp;
        })
        
    }
    const handleToggle = (filter: string) => {
         let newTodoToshow = todos.filter((todo) => {
            switch(filter) {
                case 'ALL': return true;
                case 'COMPLETED': if( todo.isCompleted ) {
                    return true;
                } else {
                    return false;
                }
                case 'ACTIVE': if( todo.isCompleted ) {
                    return false;
                } else {
                    return true;
                };
                default:throw('filter type errpr');
            }
        })
        setTodoToshow(newTodoToshow)
    }

    useEffect(() => {
        setTodoToshow(pre => JSON.parse(JSON.stringify(todos)));
    }, [todos])
    return (
        <div>
            <AddTodo
            onClick={onAddTodo}
            />
            <TodoList 
            todos={todoToShow as todo[]}
            handleClick={onToggleState}
            ></TodoList>
            <FilterLink
            onClick={handleToggle}
            />
        </div>
    )
}

export default App;