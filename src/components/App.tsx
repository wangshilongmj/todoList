
import TodoList  from '../containers/handleToggle'
import   AddTodo from './AddTodo';
import FilterLink from '../containers/handleLinkClick';
export type todo = {
    text: string,
    isCompleted: boolean,
    id: number
};

const App = () => {
    return (
        <div>
            <AddTodo/>
            <TodoList />
            <FilterLink num={1}/>
        </div>
    )
}

export default App;