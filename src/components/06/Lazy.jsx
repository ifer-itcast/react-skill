import React, { Suspense, lazy, Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const News = lazy(() => import('./News'));

export default class Lazy extends Component {
	render() {
		return (
			<Router>
				<Suspense fallback={<div>loading...</div>}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
					</ul>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/news" component={News} />
					</Switch>
				</Suspense>
			</Router>
		);
	}
}
