import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import {addtodo} from '../redux/actions'

export default connect(null,{addtodo})(Header)