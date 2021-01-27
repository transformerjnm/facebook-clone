import { createMuiTheme, Typography, IconButton, Icon, Container } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';
import { lightTheme } from '../../theme';

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
			<CreateNewPost
				inputVariant="newPost"
				imageSrc="https://images.unsplash.com/photo-1611615748492-99a6ad27548a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				imageAlt="francesca Zama selfie"
				onInputSubmit={() => { }}
				onImageClickDestination="/"
			/>

		</Container>
	);
};
