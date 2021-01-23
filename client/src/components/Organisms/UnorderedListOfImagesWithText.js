import { List, ListItem, ListItemText, Paper } from '@material-ui/core';  
import ListItemWithImageAndText from '../Molecules/ListItemWithImageAndText';
import { lightTheme } from '../../theme';
/**
 * Summary:
 * Displays a unordered list of images with text from an array that you can click on.
 * 
 * Props: 
 * listItemsArray: array of objects where each object contains the image, title, and action.
 */
export default props => {
	var listItemsArray = [];
	const renderListItemsToScreen = () => {
		props.listItemsArray.forEach(item => {
			listItemsArray.push(
				<ListItemWithImageAndText text={item.name} action={item.action}>
					{item.image}
				</ListItemWithImageAndText>
			);
		});
	};
	const paperStyles = {
		width: '25vw',
		backgroundColor: lightTheme.palette.primary.main
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