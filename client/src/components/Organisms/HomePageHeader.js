import { Grid, IconButton, Hidden } from '@material-ui/core';
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
import PersonIcon from '@material-ui/icons/Person';

/**
 * Summary:
 *Header where you can search and navigate the application. 
 * 
 * Props: 
 * userProfileImage: a string that is used to set a image's src attribute
 * imageAlt: a string for a image's alt attribute
 * imageDestination: a string that sets the browser's url on click of the image
 * authenticatedUsername: a string of the user that is currently logged in
 * showSearch: a boolean value to determine if the search pop up is showing
 * showIcons: a boolean value to determine if the icon pop up is showing
 * setShowSearch: a function that sets state to show the search pop up on small devices
 * setShowIcons: a function that sets state to show the list of icons on small devices
 */
export default props => {
	const headerContainer = {
		height: '56px',
		backgroundColor: lightTheme.palette.primary.light,
		padding: '0 1rem'
	};
	const iconButtonStyles = {
		backgroundColor: lightTheme.palette.primary.main,
		padding: '6px'
	};

	return (
		<div style={headerContainer}>
			<Grid container alignItems="center">
				<Grid item lg={3} md={2} xs={3}>
					<Grid container alignItems="center">
						{/**Desktop search bar */}
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
						{/**Mobile search bar */}
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
								<SearchIcon />
							</IconButton>
						</Hidden>
					</Grid>
				</Grid>
				{/** tablet and up navigation links */}
				<Hidden smDown>
					<Grid item lg={6} md={6}>
						<Grid container justify="center" alignItems="center">
							<Grid item>
								<NavigationIconLink navLinkDestination="/home">
									<HomeIcon />
								</NavigationIconLink>
							</Grid>
							<Grid item>
								<NavigationIconLink navLinkDestination="/friends">
									<PersonIcon />
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
							<Hidden mdDown>
								<Grid item>
									<NavigationIconLink navLinkDestination="/group">
										<GroupIcon />
									</NavigationIconLink>
								</Grid>
							</Hidden>
						</Grid>
					</Grid>
				</Hidden>
				<Grid item lg={3} md={4} xs={9}>
					<Grid container alignItems="center" justify="flex-end" spacing={2}>
						<Grid item >
							<Grid container alignItems="center" justify="flex-end" spacing={1}>
								{/**menu Icon to show on phones and tablets */}
								<Hidden lgUp>
									<Grid item>
										<IconButton onClick={() => props.setShowIcons(!props.showIcons)}>
											<MenuIcon fontSize="large" />
										</IconButton>
									</Grid>
								</Hidden>
								{/** User profile link to show on laptops and up */}
								<Hidden mdDown >
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
									<IconButton style={iconButtonStyles}>
										<AddIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton style={iconButtonStyles}>
										<MessageIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton style={iconButtonStyles}>
										<NotificationsIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<IconButton style={iconButtonStyles}>
										<ArrowDropDownIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
