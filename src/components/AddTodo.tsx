import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { AppDispatch }from '../app/store'

const add = ({dispatch}: {dispatch: AppDispatch}) => {
    let input: HTMLInputElement | null;
    return (
        <div>
            <form 
            onSubmit={e => {
                e.preventDefault()
                if(!input || !input.value.trim()) {
                    return ;
                }
                dispatch(addTodo(input.value));
                input.value=''
            }}>
                <input ref={node => {
                    input = node;
                }}/>
                <button
                type="submit"

                >
                    addTodo
                </button>
            </form>
        </div>
        
    )
}

const AddTodo = connect()(add)

export default AddTodo