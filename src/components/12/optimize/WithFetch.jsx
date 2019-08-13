import React, {Component} from 'react';

const withFetch = url => View => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                data: null
            };
        }
        async componentDidMount() {
            const res = await fetch(url);
            const data = await res.json();
            this.setState({
                loading: false,
                data
            });
        }
        render() {
            if(this.state.loading) {
                return <div>loading...</div>
            } else {
                return <View data={this.state.data}></View>
            }
        }
    }
};

export default withFetch;