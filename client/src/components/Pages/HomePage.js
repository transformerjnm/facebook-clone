import { createMuiTheme, Typography, IconButton, Icon, Container } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';
import { lightTheme } from '../../theme';
import PostComment from '../Organisms/ViewAndAddPostComment';

/**
 * Summary:
 * Home page that has three columns.
 *
 * Props:
 *
 */
export default props => {
	return (
		<Container>
			<PostComment
				authenticatedUser={
					{
						authenticatedUsername: "Clay Banks",
						authenticatedProfilerUrl: "/",
						authenticatedProfileImage: "https://images.unsplash.com/photo-1611323593958-0fec16fa2909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					}
				}
				comments={
					[
						{
							commentMessage: "Hello World",
							commentAuthorName: "Robby Meek",
							commentAuthorProfileImage: "https://images.unsplash.com/photo-1611324190899-64438dd49820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
							commentAuthorProfileUrl: "/",
						},
						{
							commentMessage: "Hello World",
							commentAuthorName: "Robby Meek",
							commentAuthorProfileImage: "https://images.unsplash.com/photo-1611324190899-64438dd49820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
							commentAuthorProfileUrl: "/",
						}
					]
				}
			/>
		</Container>
	);
};
