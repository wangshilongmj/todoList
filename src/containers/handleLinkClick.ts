import { connect } from 'react-redux'
import { FilterLink } from '../components/FilterLink'
import { setVisibilityFilter } from '../actions'
import { AppDispatch }from '../app/store'


const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: AppDispatch,props: any) => {
    console.log(props)
    return {
        onClick: (filter: string) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
        
}
const obj = {
    onClick: (filter: string) => setVisibilityFilter(filter)
}
const handleLinkClick = connect(
    mapStateToProps,
    obj
)(FilterLink)

export default handleLinkClick;