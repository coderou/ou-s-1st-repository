import React from 'react';
import './list.css';

class List extends React.Component {
    render() {
        return <ul className="todo-main">
            {this.props.children}
        </ul>
    }
}

export default List;