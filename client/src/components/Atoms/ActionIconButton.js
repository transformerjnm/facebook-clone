import { Fragment } from 'react';
import { Button, IconButton } from '@material-ui/core'; 
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import StarIcon from '@material-ui/icons/Star';



/**
 * Summary: 
 * Button that has text and a icon. When clicked it fires an action.
 * 
 * Props: 
 * buttonIcon
 * buttonAction
 * buttonText
 */
export default props => {
	return (
		<>
			<IconButton>
				<PeopleIcon/>
				{props.buttonText}
			</IconButton>
		</>
	);
}