import { List, ListItem, ListItemText } from '@material-ui/core';  
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';

/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects where each object contains the image, title, and action.
 */
export default props => {
	const renderListItemsToScreen = () => {
		props.listItemsArray.foreach(() => {

		});
	}
	return (
		<div>
			<p>unorderd List</p>
		</div>
  	);
}