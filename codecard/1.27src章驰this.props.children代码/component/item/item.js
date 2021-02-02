import React from 'react';
import './item.css'
import PubSub from 'pubsub-js'

class Item extends React.Component {
    handle = (e) => {
        PubSub.publish('bool', e.target.checked)
    }

    render() {
        return <li>
            <label>
                <input type="checkbox" checked={this.props.children.isDone} onChange={this.handle} />
                <span>{this.props.children.todoName}</span>
            </label>
            <button className="btn btn-danger">删除</button>
        </li>
    }
}

export default Item;