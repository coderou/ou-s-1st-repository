import Count from '../pages/Count'
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions'

export default connect(state => ({ count: state.count }), { increment, decrement })(Count)