import React, {Component} from 'react';
// 00. 事件绑定
// import BindEvent from '@/components/00/BindEvent';
// 01. 使用 Ref
import AboutRef from '@/components/01/AboutRef';
// 02. 新生命周期
// import GetDerivedStateFromProps from '@/components/02/GetDerivedStateFromProps';
// import GetSnapshotBeforeUpdate from '@/components/02/GetSnapshotBeforeUpdate';
// 03. 旧的 Context API
// import OldContext from '@/components/03/OldContext';
// import NewContext from '@/components/03/NewContext';
// 04. PureComponent
// import PureCom from '@/components/04/PureCom';
// 05. React.memo()
// import Memo from '@/components/05/Memo';
// 06. React.lazy()
// import Lazy from '@/components/06/Lazy';
// 07. ErrorBoundary
// import Test, {ErrorBoundary} from './07/ErrorBoundary';
// 08. React.createPortal
// import Test from './08/CreatePortal';
// 09. Fragments
// import Fragment from './09/Fragment';
// 10. Hooks
import Hooks from './10/Hooks16';

export default class App extends Component {
    render() {
        return (
            <Hooks/>
        );
    }
}