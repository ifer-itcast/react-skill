import React from 'react';

export default class News extends React.Component {
    handleClick = () => {
        // this.props.history.goBack();
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>News: {this.props.match.params.id}</p>
                <button onClick={this.handleClick}>返回</button>
            </div>
        );
    }
}

/* export default ({match}) => {
    return (
        <div>
            <p>News: {match.params.id}</p>
        </div>
    );
} */