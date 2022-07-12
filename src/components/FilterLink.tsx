export const FilterLink = ({onClick, num}: {onClick: (filter: string) => void, num: number}) => {
    
    return (
        <div>
            {num}
            <a onClick={e => {
                e.preventDefault()
                onClick('SHOW_ALL')
            }}>ALL</a>
            <a onClick={ e=> {
                e.preventDefault()
                onClick('SHOW_COMPLETED')
            }}>Completed</a>
            <a onClick={e => {
                e.preventDefault()
                onClick("SHOW_ACTIVE")
            }}>Active</a>
        </div>
    )
        

}