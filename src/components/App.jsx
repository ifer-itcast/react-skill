import React, {Component} from 'react';
// 1. 事件绑定
// import BindEvent from '@/components/00/BindEvent';
// 2. 使用 Ref
// import AboutRef from '@/components/01/AboutRef';
// 3. 新生命周期
// import GetDerivedStateFromProps from '@/components/02/GetDerivedStateFromProps';
// import GetSnapshotBeforeUpdate from '@/components/02/GetSnapshotBeforeUpdate';
// 4. 旧的 Context API
import Context from '@/components/03/Context';


export default class App extends Component {
    render() {
        return (
            <>
                <Context/>
            </>
        );
    }
}