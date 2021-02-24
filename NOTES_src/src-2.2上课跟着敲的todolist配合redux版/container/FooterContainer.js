import { connect } from 'react-redux'
import Footer from '../components/Footer/Footer'
import {checkTodos,deldoneTodos} from '../redux/actions'

export default connect(
  state => ({ list: state.todoList }),
  {checkTodos,deldoneTodos})(Footer)