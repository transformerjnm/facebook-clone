import { createMuiTheme, Typography, IconButton, Icon} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'; 
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';

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
    	<div theme={createMuiTheme}>
     		<Typography variant="p">Home Page</Typography>
				<Typography variant="h1">Face Clones</Typography>
				<Typography variant="h2">Face Clones</Typography>
				<Typography variant="h3">Face Clones</Typography>
				<Typography variant="h4">Face Clones</Typography>
				<Typography variant="h5">Face Clones</Typography>
				<Typography variant="h6">Face Clones</Typography>
				<Typography variant="body1">Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77Todai we r coding sTu77</Typography>

				<Typography variant="h1">This is FASBOOK CLONE *Russian Accent*</Typography>
				<Typography variant="subtitle1">Like this to be cool</Typography>
				<IconButton><ThumbUpIcon /></IconButton>

				 
    	</div>
  	);
}