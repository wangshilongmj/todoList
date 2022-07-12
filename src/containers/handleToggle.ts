import { todo } from "../components/App";
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoList } from "../components/TodoList";


const handleToggle = (todos: todo[], filter: string) => {
    console.log(filter, todos)
    if(!todos) return todos;
    switch(filter) {
        case 'SHOW_COMPLETED': 
            return todos.filter(todo => todo.isCompleted);
        case 'SHOW_ACTIVE': 
            return todos.filter(todo => !todo.isCompleted);
        case 'SHOW_ALL':
        default:return todos;
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: handleToggle(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleClick: (id: number) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
  
export default VisibleTodoList