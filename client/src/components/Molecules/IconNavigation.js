import { Grid, Hidden } from '@material-ui/core';
import NavigationIconLink from '../Atoms/NavigationIconLink';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

/**
 * Summary:
 * navigation of icon links for header. links are hardcoded to go to home, friends, live, marketplace, and groups.
 * 
 * Props: 
 * None
 */
export default props => {
	return (
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
	);
};