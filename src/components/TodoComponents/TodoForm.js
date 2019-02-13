import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }

    changeMessage = event => {
        this.setState({
            message: event.target.value,
            }
        )
    }

    clearMessage = () => {
        this.setState({
            message: '',
            }
        )
    }

    render() {
        return (
            <div>
                <input placeholder="...todo" value={this.state.message} onChange={this.changeMessage}></input>
                <button onClick={() => this.props.addTask(this.state.message)}>Add Todo</button>
                <button onClick={this.clearMessage}>Clear completed</button>
            </div>
        );
    }
}
