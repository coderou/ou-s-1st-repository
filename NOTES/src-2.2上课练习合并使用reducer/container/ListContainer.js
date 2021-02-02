import List from '../pages/List/index';
import { connect } from 'react-redux'
import { getUserDataAsync, setFlagCreator } from '../redux/actions'

export default connect(
  state => ({
    users: state.userreducer.users,
    flag: state.flagreducer.flag
  }),
  { getUserDataAsync, setFlagCreator }
)(List)
