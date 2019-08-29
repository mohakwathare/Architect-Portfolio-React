// Routes file. Defines the specific route pages for each component.
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Blog from '../Components/Blog/Blog';
import Art from '../Components/Art/Art';
import InvalidURL from '../Components/InvalidURL/InvalidURL';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/art" component={Art} />
			<Route exact path="/*" component={InvalidURL} />
		</Switch>
	</BrowserRouter>
);

export default Routes;