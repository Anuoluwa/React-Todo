import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <div>
                <input
                    value={this.state}
                    onChange={this}
                    type="text"
            />

            <button onClick={this}>Add Todo</button>
            <button onClick={this}>Clear completed</button>

            </div>
        )
    }
}

export default TodoForm;