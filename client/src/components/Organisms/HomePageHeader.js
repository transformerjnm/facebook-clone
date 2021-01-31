import { Grid, IconButton, Hidden, Icon } from '@material-ui/core';  
import NavigationIconLink from '../Atoms/NavigationIconLink';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import CircleImageWithTitle from '../Molecules/CircleImageWithTitle';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { lightTheme } from '../../theme';
import CircleImage from '../Atoms/CircleImage';
/**
 * Summary:
 * Responsive header for navigating the application. At the current stage in development we want this to be responsive and have dummy links.
 * The mobile menu should work.
 * 
 * Props: 
 * userProfileImage: a string that is used to set a image's src attribute
 * imageAlt: a string for a image's alt attribute
 * imageDestination: a string thta sets the browser's url on click of the image
 * authenticatedUsername: a string of the user that is currently logged in
 * showSearch: a boolean value to determine if the search pop up is showing
 * showIcons: a boolean value to determine if the icon pop up is showing
 * setShowSearch: a function that sets state to show the search pop up on small devices
 * setShowIcons: a fkunction that sets state to show the list of icons on small devices
 */
export default props => {
	const headerContainer = {
		height: '56px',
		backgroundColor: lightTheme.palette.primary.light
	};

  	return (
    	<div style={headerContainer}>
     		<Grid container alignItems="center">
				<Grid item lg={3} md={2} sm={2}>
					<Grid container alignItems="center">
						<Hidden mdDown>
							<Grid item>
									<CircleImageWithTextInput 
										inputVariant="search"
										imageSrc="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"					
										imageAlt="fb"
										onImageClickDestination="/home"
									/>
							</Grid>
						</Hidden>
						<Hidden lgUp>
							<Grid item>
								<CircleImage
									src="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"
									alt="fb"
									onImageClickDestination="/home"
								/>
							</Grid>
						</Hidden>
						<Hidden lgUp>
							<IconButton onClick={() => props.setShowSearch(!props.showSearch)}>
								<SearchIcon/>
							</IconButton>
						</Hidden>
					</Grid>
				</Grid>
				<Hidden smDown>
					<Grid item lg={5} md={6} sm={8}>
						<Grid container justify="center" alignItems="center">
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
				</Hidden>
				<Grid item lg={4} md={4} sm={6}>
					<Grid container alignItems="center" justify="center" spacing={4}>
						<Hidden lgUp>
							<Grid item>
								<IconButton onClick={() => props.setShowIcons(!props.showIcons)}>
									<MenuIcon/>
								</IconButton>
							</Grid>
						</Hidden>
						<Hidden mdDown>
							<Grid item>
								<Grid container justify="flex-start">
									<CircleImageWithTitle 
										imageUrl={props.userProfileImage}
										imageAlt={props.imageAlt}
										imageClick={props.imageDestination}
										title={props.authenticatedUsername}
									/>
								</Grid>
							</Grid>
						</Hidden>
						<Grid item>
							<Grid container justify="flex-end" spacing={1}>
									<Grid item>
										<IconButton 
											style={{backgroundColor: lightTheme.palette.primary.main }}
											size="medium"
										>
											<AddIcon/>
										</IconButton>
									</Grid>
									<Grid item>
										<IconButton style={{backgroundColor: lightTheme.palette.primary.main }}>
											<MessageIcon/>
										</IconButton>
									</Grid>
									<Grid item>
										<IconButton style={{backgroundColor: lightTheme.palette.primary.main }}>
											<NotificationsIcon/>
										</IconButton>
									</Grid>
									<Grid item>
										<IconButton style={{backgroundColor: lightTheme.palette.primary.main }}>
											<ArrowDropDownIcon/>
										</IconButton>
									</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			 </Grid>
    	</div>
  	);
}