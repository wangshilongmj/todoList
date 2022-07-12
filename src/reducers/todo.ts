const todos = (preState=[], action: any) => {
    //if(!preState) return [];
    console.log('todos');
    switch(action.type) {
        case 'ADD_TODO': 
            console.log('add todo')
            return [
                ...preState,
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: false
                }
            ];
        case 'TOGGLE_TODO':
            return preState.map((todo: {id:number ,isCompleted:boolean, text: string}) => {
                if ( todo.id === action.id ) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                } else {
                    return todo;
                }
            })

        default:return preState;
    }
}



export default todos;