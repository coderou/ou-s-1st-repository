import { connect } from 'react-redux'
import Item from '../components/Item/Item'
import { updataTodo, deleteTodo } from '../redux/actions'

export default connect(
  (state) => {
    // console.log('item容器组件', state);
    return { test: '1' }
  },
  { updataTodo, deleteTodo })(Item)