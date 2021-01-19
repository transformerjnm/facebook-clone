import { Card, CardHeader, CardContent, CardActions, Typography } from '@material-ui/core';
import PostInteractionCluster from '../Molecules/PostInteractionCluster';
import CircleImageWithTitle from '../Molecules/CircleImageWithTitle';

/**
 * Summary:
 * Displays Text and Image post from an object.
 * 
 * Props: 
 * for CircleImageWithTitle: 
 * 		authorImageUrl: string of url to image
 * 		authorImageAlt: string of text for if image can not be loaded
 * 		authorName: string authors name
 * 		subtitle: string to display under author name. Often it is last online time.
 * 		authorClick: function to be ran onclick of author image.
 * for PostInteractionCluster:
 * 		addLikeToPost: function to increase number of likes
 * 		openCommentsForPost: function to open comment section
 * 		sharePost: function to allow user to share the post
 * 		numberOfPostLikes: integer of number of likes
 * 		numberOfPostComments: integer of number of comments
 * 		numberOfPostShares: integer of number of post
 * postImages: array of images to be displayed withing the post.
 * postText: string of text to display with the post
 */
export default props => {
	return (
		<Card variant="outlined">
			<CardContent>
				<CircleImageWithTitle
					imageUrl={props.authorImageUrl}
					imgAlt={props.authorImageAlt}
					imageClick={props.authorClick}
					title={props.authorName}
					subtitle={props.subtitle}
				/>
				<Typography>
					{props.postText}
				</Typography>
			</CardContent>
			<CardActions>
				<PostInteractionCluster
					addLikeToPost={props.addLikeToPost}
					openCommentsForPost={props.openCommentsForPost}
					sharePost={props.sharePost}
					numberOfPostLikes={props.numberOfPostLikes}
					numberOfPostComments={props.numberOfPostComments}
					numberOfPostShares={props.numberOfPostShares}
				/>
			</CardActions>
		</Card>
	);
}