import { Fragment } from 'react';
import { Box, Button, FormControl, IconButton } from '@material-ui/core'; 
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import StarIcon from '@material-ui/icons/Star';
import { spacing } from '@material-ui/system';


/**
 * Summary: 
 * Button that has text and a icon. When clicked it fires an action.
 * 
 * Props: 
 * buttonIcon
 * buttonAction
 * buttonText
 */
export default ({buttonIcon, buttonAction, buttonText}) => {
	let actionIconButton;
	const iconButtonStyles = {
		color: 'black'
	};
	const boxStyles = {
		display: 'flex',
		justifyContent: 'center'
	};
	const iconStyles = {
		marginRight: 'auto'
	};

	switch(buttonIcon){
		case "people": actionIconButton = <Button style={iconButtonStyles}>
											<Box mr={1.5} style={boxStyles}>
												<PeopleIcon color="secondary" fontSize="large" />
											</Box>
											<Box mr="auto" style={boxStyles}>
												{buttonText}
											</Box>
										</Button>;
		break;
		case "store": actionIconButton = <Button style={iconButtonStyles}>
											<Box mr={1.5} style={boxStyles}>
												<StorefrontIcon color="secondary" fontSize="large" />
											</Box>
											<Box mr="auto" style={boxStyles}>
												{buttonText}
											</Box>
										</Button>;
	}

	return (
		<>
			<FormControl fullWidth hiddenLabel>
				{actionIconButton}
			</FormControl>
		</>
	);
}