import List from '../components/List/List';
import { connect } from 'react-redux'
import { deleteOne, changeIsDone } from '../redux/actions'

export default connect(state => ({ list: state.list }), { deleteOne, changeIsDone })(List)