import Header from '../components/Header/Header';
import { connect } from 'react-redux'
import { addOne } from '../redux/actions'

export default connect(state => (
  {
    list: state.list
  }
),
  { addOne }
)(Header)