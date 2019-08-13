import React, {Component} from 'react';

const Logger = (Com) => {
    return class extends Component {
        render() {
            return <Com {...this.props}/>;
        }
    }
}

const Hello = Logger((props) => {
    return (
        <p>Hello {props.name}</p>
    )
});

export default Hello;