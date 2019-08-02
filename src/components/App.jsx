import React, {Component} from 'react';
// 1. 事件绑定
// import BindEvent from '@/components/00/BindEvent';
// 2. 使用 Ref
// import AboutRef from '@/components/01/AboutRef';
// 3. 新生命周期
// import GetDerivedStateFromProps from '@/components/02/GetDerivedStateFromProps';
// import GetSnapshotBeforeUpdate from '@/components/02/GetSnapshotBeforeUpdate';
// 4. 旧的 Context API
// import OldContext from '@/components/03/OldContext';
// import NewContext from '@/components/03/NewContext';
// 5. PureComponent
import PureCom from '@/components/04/PureCom';

export default class App extends Component {
    render() {
        return (
            <>
                <PureCom/>
            </>
        );
    }
}