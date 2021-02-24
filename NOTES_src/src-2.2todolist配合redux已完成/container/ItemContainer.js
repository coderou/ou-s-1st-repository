import Item from '../components/Item/Item';
import { connect } from 'react-redux'
import { deleteOne, changeIsDone } from '../redux/actions'

export default connect(state => (
  {
    id: state.list[0].id,
    todoName: state.list[0].todoName,
    isDone: state.list[0].isDone,
  }
),
  { deleteOne, changeIsDone }
)(Item)