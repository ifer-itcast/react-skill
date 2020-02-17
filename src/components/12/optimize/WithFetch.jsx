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
                // 注意这里不要忘记把 this.props 继续往下传递，不然使用高阶组件封装后的组件时无法传递 props
                return <View data={this.state.data} {...this.props}></View>
            }
        }
    }
};

export default withFetch;