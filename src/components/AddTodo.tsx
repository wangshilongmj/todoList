


export const AddTodo = ({onClick}: {onClick: (value: string) => void}) => {
    let input: HTMLInputElement | null;
    return (
        <div>
            <form 
            onSubmit={e => {
                e.preventDefault()
                console.log('submit')
                if(!input || !input.value.trim()) {
                    return ;
                }
                onClick(input.value);
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