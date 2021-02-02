import Count from '../pages/Count';
import { connect } from 'react-redux'
import { increment, decrement,incrementAsync } from '../redux/actions'

export default connect(state => ({ count: state.count }), { increment, decrement,incrementAsync })(Count)