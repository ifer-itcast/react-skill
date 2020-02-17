import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

// 00. 事件绑定
// import BindEvent from '@/components/00/BindEvent';
// 01. 使用 Ref
import AboutRef from '@/components/01/AboutRef';
// 02. 新生命周期
// import GetDerivedStateFromProps from '@/components/02/GetDerivedStateFromProps';
// import GetSnapshotBeforeUpdate from '@/components/02/GetSnapshotBeforeUpdate';
// 03. 旧的 Context API
import OldContext from '@/components/03/OldContext';
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
// import Hooks from './10/Hooks16';

// 11. 路由
import Header from './11/Header';
import Footer from './11/Footer';
import Home from './11/Home';
import About from './11/About';
import News from './11/News';

const R = (
	<Router>
		<Link to="/">首页</Link>
		<Link to="/news">新闻</Link>
		<Link to="/about">关于</Link>
		<Header />
		<Route path="/" exact component={Home} />
		<Route path="/news" render={() => <Redirect to="/news/1" />} />
		<Route path="/news/:id" component={News} />
		<Route path="/about" component={About} />
		<Footer />
	</Router>
);

// 12. 高阶组件，是一个函数，参数和返回值都是一个组件
import Hello from './12/Hello';
// import User from './12/User';
// import Joke from './12/Joke';
// import User from './12/optimize/User';
// import Joke from './12/optimize/Joke';

// 13. react-powerplug
import Normal from './13/Normal';
import Powerplug from './13/Powerplug';

// 14. Render Props
// import Mouse from './14/Mouse';
import Mouse2 from './14/Mouse2';
import dog from './14/dog.jpg';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Mouse2>
					{({ x, y }) =>
						<p>
							x坐标：{x}y坐标：{y}
						</p>}
				</Mouse2>
				<Mouse2>
					{({ x, y }) =>
						<img
							src={dog}
							style={{
								width: 100,
								position: 'absolute',
								top: y,
								left: x
							}}
						/>}
				</Mouse2>
			</Fragment>
		);
	}
}
