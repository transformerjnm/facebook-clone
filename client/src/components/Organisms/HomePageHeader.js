import { Grid, List } from '@material-ui/core';  
import NavigationIconLink from '../Atoms/NavigationIconLink';
import TextInput from '../Atoms/TextInput';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';
import CircleImage from '../Atoms/CircleImage';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
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
				<Grid item md={4}>
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
				<Grid item md={4}>
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
					<Grid container alignItems="center" justify="center">
						<Grid item>
							<List>
								<ListItemWithImageAndText text="Blaine">
									<CircleImage 
										src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
										alt="authenticated user"
										onImageClickDestination="/user"
										isOnline={false}
									/>
								</ListItemWithImageAndText>
							</List>
						</Grid>
					</Grid>
				</Grid>
			 </Grid>
    	</div>
  	);
}