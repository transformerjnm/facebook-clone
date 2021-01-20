import { createMuiTheme, Typography, IconButton, Icon, Container } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';
import { lightTheme } from '../../theme';
import usePost from '../Organisms/UserPost';
// import lightTheme from '../../theme';
/**
 * Summary:
 * Home page that has three columns.
 *
 * Props:
 *
 */
export default props => {
	return (
		<div>
			<Container>
				<UserPost
					postText="The National Mall in Washington, D.C., was decorated on Monday with close to 200,000 flags representing the people who are unable to attend President-elect Joe Biden’s inauguration because of the coronavirus pandemic and restrictive security measures"
					authorImageUrl="https://images.unsplash.com/photo-1610984474942-201775d5ee9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					authorImageAlt="Author image"
					authorName="Bella Gates"
					subtitle="15m"
					numberOfPostLikes="10"
					numberOfPostComments="1"
					numberOfPostShares="0"
					postImages={
						[
							{
								imageSrc: "https://images.unsplash.com/photo-1611108075836-3fb71c297ace?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
								imageAlt: "beautiful snowy mountain range"
							}
						]
					}
				/>
			</Container>

			<p>Home Page</p>
		</div>
	);
};
