import React, { Component } from 'react';

export default class GetSnapshotBeforeUpdate extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        this.ulRef = React.createRef();
    }
    addData = () => {
        this.setState({
            list: [Math.random(),...this.state.list]
        });
    }
    getSnapshotBeforeUpdate() {
        // 发生于 render 之后，但并没有渲染完毕，可以从 DOM 中捕获一些信息（例如滚动之前的高度）
        // 返回值会作为 componentDidUpdate 的第三个参数
        console.log(2);
        return this.ulRef.current.offsetHeight
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
    }
    render() {
        console.log(1);
        return (
            <div>
                <ul ref={this.ulRef}>
                    {
                        this.state.list.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
                <button onClick={this.addData}>添加</button>
            </div>
        );
    }
}