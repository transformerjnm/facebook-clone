import { Grid } from '@material-ui/core';  
import NavigationIconLink from '../Atoms/NavigationIconLink';
import TextInput from '../Atoms/TextInput';
import CircleImage from '../Atoms/CircleImage';
import FacebookIcon from '@material-ui/icons/Facebook';

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
     		<Grid container>
				<Grid item>
					<Grid container>
						
					</Grid>
				</Grid>
			 </Grid>
    	</div>
  	);
}