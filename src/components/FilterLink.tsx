export const FilterLink = ({onClick}: {onClick: (filter: string) => void}) => {
    return (
        <div>
            <a onClick={e => {
                e.preventDefault()
                onClick('ALL')
            }}>ALL</a>
            <a onClick={ e=> {
                e.preventDefault()
                onClick('COMPLETED')
            }}>Completed</a>
            <a onClick={e => {
                e.preventDefault()
                onClick("ACTIVE")
            }}>Active</a>
        </div>
    )
        

}