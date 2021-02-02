import React from 'react';
import './header.css'
import PubSub from 'pubsub-js'

class Header extends React.Component {
    state = {
        todoName: ''
    }

    //受控组件的事件函数
    handle = (e) => {
        this.setState({
            todoName: e.target.value.trim()
        })
    }

    keyUpChange = (e) => {
        if (e.keyCode === 13 && this.state.todoName !== '') {
            PubSub.publish('add', this.state.todoName)
            this.setState({
                todoName: ''
            })
        }
    }

    render() {
        return <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={this.state.todoName} onChange={this.handle} onKeyUp={this.keyUpChange} />
        </div>
    }
}

export default Header;