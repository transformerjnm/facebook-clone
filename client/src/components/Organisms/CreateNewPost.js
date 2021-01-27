import { Paper, Divider, Grid } from '@material-ui/core';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import ActionIconButton from '../Atoms/ActionIconButton';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

/**
 * Summary:
 * Allows you to create a new text or image based post.
 * 
 * Live video will just be a dummy button. We should be able to have text, images, and emojis/Feelings/Activity.
 * This will allow the user to enter all this information in but will not update the DB or anything yet. 
 * 
 * Props: 
 * for CircleImageWithTextInput
 * 		inputVariant: string such as search, message, comment that will be used to determine the input styles
 * 		imageSrc: string image Url
 * 		imageAlt: string image alt for given image
 * 		onInputSubmit: function to run when the input is submitted
 * 		onImageClickDestination: string url to redirect to on click
 * 		isOnline: optional boolean for if the user should be displayed as online.
 */
export default props => {
	const iconHeightStyles = {
		fontsize: "24px"
	}
	return (
		<Paper style={{ padding: "1rem" }}>
			<CircleImageWithTextInput
				inputVariant={props.inputVariant}
				imageSrc={props.imageSrc}
				imageAlt={props.imageAlt}
				onInputSubmit={props.onInputSubmit}
				onImageClickDestination={props.onImageClickDestination}
			/>
			<Divider style={{ margin: ".5rem" }} />
			<Grid container alignContent="center">
				<Grid item xs={4}>
					<ActionIconButton buttonText="Live Video" buttonAction={props.addLikeToPost}><VideoCallIcon color="error" style={iconHeightStyles} /></ActionIconButton>
				</Grid>
				<Grid item xs={4}>
					<ActionIconButton buttonText="Photo/Video" buttonAction={props.openCommentsForPost}><PhotoLibraryIcon style={iconHeightStyles, { color: "green" }} /></ActionIconButton>
				</Grid>
				<Grid item xs={4}>
					<ActionIconButton buttonText="Feeling/Activity" buttonAction={props.sharePost}><InsertEmoticonIcon style={iconHeightStyles, { color: "#f5bb41" }} /></ActionIconButton>
				</Grid>
			</Grid>
		</Paper>
	);
}