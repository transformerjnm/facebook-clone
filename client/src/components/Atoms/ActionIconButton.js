import { Box, Button, FormControl, IconButton } from '@material-ui/core'; 
/**
 * Summary: 
 * Button that has text and a icon. When clicked it fires an action.
 * 
 * Props:
 * props.children: a icon that is wrapped within the opening and closing tags of this component 
 * buttonAction: a callback function that is fired when the button component is clicked
 * buttonText: text that is shown next to the icon
 */
export default props => {
	const boxStyles = {
		display: 'flex',
		justifyContent: 'center'
	};

	return (
		<>
			<FormControl fullWidth hiddenLabel>
				<Button onClick={() => props.buttonAction()}>
					<Box mr={1.5} style={boxStyles}>
						{props.children}
					</Box>
					<Box mr="auto" style={boxStyles}>
						{props.buttonText}
					</Box>
				</Button>
			</FormControl>
		</>
	);
}