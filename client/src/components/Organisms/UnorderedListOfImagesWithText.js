import { useState } from 'react';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';  
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';

/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects where each object contains the image, title, and action.
 * variant: a string that states which type of unordered list is rendered: sidebar or contacts
 */
export default props => {
	var listItemsArray = [];
	const renderListItemsToScreen = () => {
		props.listItemsArray.forEach(item => {
			listItemsArray.push(
				<ListItemWithImageAndText text={item.name}>
					{item.image}
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
					{listItemsArray}
				</List>
			</Paper>
		</>
  	);
}