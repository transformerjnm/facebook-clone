import { Paper } from '@material-ui/core';
import UserCommentWithImage from '../Molecules/UserCommentWithImage';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import CircleImage from '../Atoms/CircleImage';

/**
 * Summary:
 * Displays comments and allows you to post comments. This should take in a array of objects and display them.
 * 
 * At the current stage of development this component should display comments based on a dummy array
 * of objects and allow the user to write a comment with images and emojis but doesn't need to add the comment yet.
 *
 * Props: 
 * authenticatedUser: object of profile information about the authenticated user.
 * 		{
 * 			authenticatedUsername: string authenticated username,
 * 			authenticatedProfilerUrl: sting url to authenticated user profile,
 * 			authenticatedProfileImage: string url to auth user profile image
 * 		}
 * comments: array of objects where each object is a comment.
 * 		[
 * 			{
 * 				commentMessage: string of comment,
 * 				commentAuthorName: sting of authors name,
 * 				commentAuthorProfileImage: string of url to authors profile image,
 * 				commentAuthorProfileUrl: string url location of author profile,
 * 				commentPostDate: js data object of time posted.
 * 			}
 * 		] 
 *
 */
export default props => {
	/** 
	 * Calculate time since comment has been posted and return a string of time since posted in shorthand
	 * shorthand example: 6m 5d 1w 8m 1y
	*/
	const calculateTimeSincePosted = (dateObjectWhenPosted) => {
		return "5m";
	}
	/**
	 * Add new comment to this post comments
	 */
	const addNewComment = () => {

	};
	/**
	 * render all the comments to the screen
	 */
	const renderCommentsToScreen = () => {
		props.comments.foreach(() => {

		});
	};

	return (
		<Paper>
			<CircleImageWithTextInput
				inputVariant="comment"
				imageSrc={props.authenticatedUser.authenticatedProfileImage}
				imageAlt={`Picture of ${props.authenticatedUser.authenticatedUsername}`}
				onInputSubmit={addNewComment()}
				onImageClickDestination={props.authenticatedUser.authenticatedProfileImage}
				isOnline={true}
			/>
			<UserCommentWithImage
				authorName={props.comments[0].commentAuthorName}
				authorComment={props.comments[0].commentMessage}
				navLinkDestination={props.comments[0].commentAuthorProfileUrl}
				timePosted={calculateTimeSincePosted(props.comments[0].commentPostDate)}
			>
				<CircleImage
					src={props.comments[0].commentAuthorProfileImage}
					onImageClickDestination={props.comments[0].commentAuthorProfileUrl}
					isOnline={false}
					alt={`Picture of ${props.comments[0].commentAuthorName}`}
				/>
			</UserCommentWithImage>
		</Paper>
	);
}