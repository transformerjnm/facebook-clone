import { Grid, IconButton } from '@material-ui/core';  
import NavigationIconLink from '../Atoms/NavigationIconLink';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import CircleImageWithTitle from '../Molecules/CircleImageWithTitle';
import AddIcon from '@material-ui/icons/Add';
import { lightTheme } from '../../theme';
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
		height: '56px',
		backgroundColor: lightTheme.palette.primary.light
	};

  	return (
    	<div style={headerContainer}>
     		<Grid container alignItems="center">
				<Grid item md={3}>
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
				<Grid item md={5}>
					<Grid container justify="center">
						<Grid item>
							<NavigationIconLink navLinkDestination="/home">
								<HomeIcon />
							</NavigationIconLink>
						</Grid>
						<Grid item>
							<NavigationIconLink navLinkDestination="/live">
								<LiveTvIcon />
							</NavigationIconLink>
						</Grid>
						<Grid item>
							<NavigationIconLink navLinkDestination="/marketplace">
								<StorefrontIcon />
							</NavigationIconLink>
						</Grid>
						<Grid item>
							<NavigationIconLink navLinkDestination="/group">
								<GroupIcon />
							</NavigationIconLink>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4}>
					<Grid container alignItems="center" justify="flex-start" spacing={4}>
						<Grid item>
							<CircleImageWithTitle 
								imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
								imageAlt="authenticated user"
								imageClick="/"
								title="blaine"
							/>
						</Grid>
						<Grid item>
							<Grid container justify="flex-end">
									<IconButton style={{backgroundColor: lightTheme.palette.primary.main }}>
										<AddIcon/>
									</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			 </Grid>
    	</div>
  	);
}