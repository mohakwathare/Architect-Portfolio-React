// Routes file. Defines the specific route pages for each component.
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Blog from '../components/Blog';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/blog" component={Blog} />
			<Route path="/skills" component={Skills} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="*" component={Error} />
		</Switch>
	</BrowserRouter>
);

export default Routes;