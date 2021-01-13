import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CircleImage from '../Atoms/CircleImage';

/**
 * Summary:
 * List Item that has a image/icon on the left and text on the right beside it. 
 * For use with unordered list and can take a action to be fired onClick. this
 * component must be wrapped with a material ui component "List"
 * 
 * Props: 
 * Text: text that is shown next to an icon or image
 * action: a function that is fired on click of a ListItem
 */
export default props => {
	const listItemIconStyles = {
		marginLeft: 'auto'
	};
	
  	return (
    	<>
			<ListItem button onClick={() => props.action()}>
				<ListItemIcon children={props.children} />
				<ListItemText primary={props.text} style={{marginLeft: '6px'}}/>
			</ListItem>
    	</>
  	);
}