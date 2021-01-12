import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CircleImage from '../Atoms/CircleImage';

/**
 * Summary:
 * List Item that has a image/icon on the left and text on the right beside it. 
 * For use with unordered list and can take a action to be fired onClick.
 * 
 * Props: 
 * Image
 * Text
 * action
 */
export default props => {
	const listItemIconStyles = {
		marginLeft: 'auto'
	};

  	return (
    	<div>
      		<p>ListItemWIthImageAndText</p>
			<List>
				<ListItem button>
					<ListItemIcon children={props.children}/>
					<ListItemText primary={props.text}/>
				</ListItem>
			</List>
    	</div>
  	);
}