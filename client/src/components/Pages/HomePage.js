import { createMuiTheme, Typography, IconButton, Icon} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'; 
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';
import CircleImageWithTextInput from '../Molecules/CircleImageWithTextInput';
import TextInput from '../Atoms/TextInput';

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
			<CircleImageWithTextInput 
				inputVariant="comment"
				imageSrc="https://images.unsplash.com/photo-1610573007685-e56716e3e4e7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				imageAlt="Women holding a camera while walking."
				isOnline={true}
			/>
			<CircleImageWithTextInput 
				inputVariant="comment"
				imageSrc="https://images.unsplash.com/photo-1610573007685-e56716e3e4e7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				imageAlt="Women holding a camera while walking."
			/>
			<CircleImageWithTextInput 
				inputVariant="comment"
			/>
			<CircleImageWithTextInput 
				inputVariant="search"
				imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAY1BMVEU6WJ7///9ofbM1VJwdRpb8/f8aRJUpTJnw8vdsf7PByd4lSpjT2egwUZvX3Os3Vp1LZ6dfda5YcKuZpsnO1OWtt9N7jLv19/uImMHo7PTc4OyxvdYUQZRZcq0AMI7i5/EAOJBh473TAAABh0lEQVR4nO3b0W7aQBBAURIDTuK4DoEEaNqS///KCpWIXbKsmJfaD+d8wejKsryj9WwGAAAAAAAAAAAAAAAAAABQNAxDczb2NFPW9G37sno8U+uapntdbx62i7uz5dgzTVW72qSdxKro1pelxLqmeyu0Equofy+1EqtkaLdi3arfFVuJVdJuxLrZ/NtHg1hXDeVWYhU0r3mj/fM/P9uxJ5ugZpW1+ui/jD3YFDX3Wax+GHugKctjLeZjzzNpF7G81ms8WQFiBYgVINZtlke/fmex/ixPVMssr5xzTtRK1WNtxUrVYx26seeblHqsZwfpVD3Wk1ipeqwPa4dUPdZarFQ91k6sVD2WiyGZeqwXW8BUd/hxdMgaPZ1sZmJluqN5toNffLYnWhXYOgSIFSBWgFgBYgWIFSBWgFgBYgWIFSBWgFgBYgWIFSBWgFgBYgWIFSBWgFgBYgWIFSBWgFgBYgWIFSBWgFgBF/8bilXT3G8fzvYudAMAAAAAAAAAAAAAAAAAAPB//AX5RQ4cWZetrAAAAABJRU5ErkJggg=="
				imageAlt="Facebook logo"
			/>
    	</div>
  	);
}