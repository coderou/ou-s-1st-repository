import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux'
import { selectAll,deleteSome } from '../redux/actions'

export default connect(state => (
  {
    list:state.list
  }
),
  { deleteSome,selectAll }
)(Footer)