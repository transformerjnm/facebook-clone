import { List } from '@material-ui/core';  
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';
import { lightTheme } from '../../theme';

/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects where each object contains the image, title, and action.
 * variant: a string that states which type of unordered list is rendered: sidebar or contacts
 */
export default props => {
	let listItemsArray = [];
	let keyForEachListItem = 1;
	const renderListItemsToScreen = () => {
		props.listItemsArray.forEach(item => {
			listItemsArray.push(
				<ListItemWithImageAndText text={item.name} key={keyForEachListItem}>
					{item.image}
				</ListItemWithImageAndText>
			);
			keyForEachListItem++;
		});
	};
	
	return (
		<div>
			<List>
				{renderListItemsToScreen()}
				{listItemsArray}
			</List>
		</div>
  	);
}