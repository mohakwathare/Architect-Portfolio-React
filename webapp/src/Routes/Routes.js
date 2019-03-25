// Routes file. Defines the specific route pages for each component.
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Skills from '../Components/Skills/Skills';
import Blog from '../Components/Blog/Blog';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/skills" component={Skills} />
			<Route exact path="/blog" component={Blog} />
		</Switch>
	</BrowserRouter>
);

export default Routes;