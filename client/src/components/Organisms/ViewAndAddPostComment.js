import { } from '@material-ui/core';  
import UserCommentWithImage from '../Molecules/UserCommentWithImage';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';

/**
 * Summary:
 * Displays comments and allows you to post comments. This should take in a array of objects and display them.
 * 
 * At the current stage of development this component should display comments based on a dummy array
 * of objects and allow the user to write a comment with images and emojis but doesn't need to add the comment yet.
 *
 * Props: 
 * comments: array of objects where each object is a comment. 
 * for UserCommentWithImage
 * 		Image: profile image of comment's author
 * 		Name: comments author name
 * 		AuthorComment: comment the author posted
 */
export default props => {
	const renderCommentsToScreen = () => {
		props.comments.foreach(() => {

		});
	};

	const postComment = () => {};
  	return (
    	<div>
     		<p>ViewAndAddComment.js</p>
    	</div>
  	);
}