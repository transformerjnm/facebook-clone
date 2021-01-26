import { Grid } from '@material-ui/core';  
import NavigationIconLink from '../Atoms/NavigationIconLink';
import TextInput from '../Atoms/TextInput';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import HomeIcon from '@material-ui/icons/Home';

/**
 * Summary:
 * Responsive header for navigating the application. At the current stage in development we want this to be responsive and have dummy links.
 * The mobile menu should work.
 * 
 * Props: 
 * 
 */
export default props => {
	const headerContainer = {
		height: '56px'
	};

  	return (
    	<div style={headerContainer}>
     		<Grid container alignItems="center">
				<Grid item>
					<Grid container alignItems="center">
						<Grid item>
							<CircleImageWithTextInput 
								inputVariant="search"
								imageSrc="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"					
								imageAlt="fb"
								onImageClickDestination="/home"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
						<Grid container alignItems="center">
							<Grid item>
								<NavigationIconLink navLinkDestination="/home">
									<HomeIcon />
								</NavigationIconLink>
								<NavigationIconLink navLinkDestination="/">
									<HomeIcon/>
								</NavigationIconLink>
							</Grid>
						</Grid>
				</Grid>
			 </Grid>
    	</div>
  	);
}