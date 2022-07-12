import { Todo, todoProps } from './Todo'
import { todo } from './App'
import { isFunctionLike } from 'typescript'


export const TodoList = ({todos, handleClick}: {todos: Array<todo>, handleClick: (index: number) => void}) => {
    return (
        <ul>
           {   
                todos.map((todo, index) => {
                    return (
                        <Todo
                        key={index}
                        text={todo.text}
                        handleClick={() => handleClick(index)}
                        isCompleted={todo.isCompleted}
                        ></Todo>
                    )
                })
            }
            
        </ul>
    )
}