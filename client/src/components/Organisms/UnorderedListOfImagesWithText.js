import { useState } from 'react';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';  
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';
import HomeIcon from '@material-ui/icons/Home';
/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects where each object contains the image, title, and action.
 */
export default props => {
	const renderListItemsToScreen = () => {
		props.listItemsArray.forEach(item => {
			console.log(item)
			return(
				<ListItemWithImageAndText text={item.itemName}>
					item.imagePath
				</ListItemWithImageAndText>
			);
		});
	};
	const paperStyles = {
		width: '25vw'
	};
	return (
		<>
			<Paper style={paperStyles}>
				<List>
					{renderListItemsToScreen()}
				</List>
			</Paper>
		</>
  	);
}