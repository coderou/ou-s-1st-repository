import { connect } from 'react-redux'
import Count from '../Count'
import { increment } from '../redux/actions'

export default connect(state => ({ count: state.count }), { increment })(Count)

