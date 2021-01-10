import { Box, Button, FormControl, IconButton } from '@material-ui/core'; 
/**
 * Summary: 
 * Button that has text and a icon. When clicked it fires an action.
 * 
 * Props: 
 * buttonAction: a callback function that is fired when the ActionIconButton is fired
 * buttonText: text that is shown next to the icon
 */
export default props => {
	let actionIconButton;
	const iconButtonStyles = {
		color: 'black'
	};
	const boxStyles = {
		display: 'flex',
		justifyContent: 'center'
	};

	return (
		<>
			<FormControl fullWidth hiddenLabel>
				<Button style={iconButtonStyles}>
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