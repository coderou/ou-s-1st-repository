import React from 'react';
import './footer.css'
import PubSub from 'pubsub-js'

class Footer extends React.Component {

    render() {
        return <div className="todo-footer">
            <label>
                <input type="checkbox"/>
            </label>
            <span>
            已完成<span>0</span> / 全部<span>0</span>
        </span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    }
}

export default Footer;