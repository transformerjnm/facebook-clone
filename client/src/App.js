import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from './theme.js'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CssBaseline from "@material-ui/core/CssBaseline";
/**
 * Summary:
 * Root component that loads all the awesome components.
 * 
 * Props: 
 * NA
 */
export default props => {
	return (
		<ThemeProvider theme={lightTheme}>
			{/** CssBaseLine allows us to set the background color of the application. */}
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path='/Home'>
						<HomePage />
					</Route>
					<Route exact path='/'>
						<p>Go to /Home in the URL</p>
						{/* Login/landing page goes here  */}
					</Route>
					<Redirect to='/' />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}