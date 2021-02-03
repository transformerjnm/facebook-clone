import { Typography, Container, Grid, Hidden } from '@material-ui/core';
import CreateNewPost from '../Organisms/CreateNewPost';
import HomePageHeader from '../Organisms/HomePageHeader';
import UnorderedListOfImagesWithText from '../Organisms/UnorderedListOfImagesWithText';
import UserPost from '../Organisms/UserPost';
import ViewAndAddPostComment from '../Organisms/ViewAndAddPostComment';
import CircleImage from '../Atoms/CircleImage';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { lightTheme } from '../../theme';

/**
 * Summary:
 * Home page that has three columns.
 *
 * Props:
 *
 */
export default props => {
	const scrollStyle = {
		overflow: "scroll",
		/** VH height minus header height */
		height: "calc(100vh - 60px)",
		scrollbarWidth: "none",
		overflowStyle: "none",
	}
	return (
		<>
			<HomePageHeader
				userProfileImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
				imagaeAlt="authenticated user"
				imageDestination="/"
				authenticatedUsername="blaine"
			/>
			<Grid container justify="center">
				<Hidden mdDown>
					<Grid item md={3} lg={3} xl={2} style={scrollStyle}>
						<UnorderedListOfImagesWithText
							listItemsArray={[
								{
									image: <HomeIcon fontSize="large" />,
									name: 'Home',
									action: null
								},
								{
									image: <PeopleIcon fontSize="large" />,
									name: 'Friends',
									action: null
								},
								{
									image: <StorefrontIcon fontSize="large" />,
									name: 'Marketplace',
									action: null
								},
								{
									image: <BookmarkIcon fontSize="large" />,
									name: 'Save',
									action: null
								},
								{
									image: <CircleImage
										alt="girl"
										onImageClickDestination="/"
										src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
									/>,
									name: 'Mary',
									action: null,
								}
							]
							}
						/>
					</Grid>
				</Hidden>
				<Grid item md={9} lg={6} style={scrollStyle}>
					<Container>
						<CreateNewPost
							inputVariant="newPost"
							imageSrc="https://images.unsplash.com/photo-1611615748492-99a6ad27548a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							imageAlt="francesca Zama selfie"
							onInputSubmit={() => { }}
							onImageClickDestination="/"
						/>
						<UserPost
							postText="The National Mall in Washington, D.C., was decorated on Monday with close to 200,000 flags representing the people who are unable to attend President-elect Joe Biden’s inauguration because of the coronavirus pandemic and restrictive security measures"
							authorImageUrl="https://images.unsplash.com/photo-1610984474942-201775d5ee9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							authorImageAlt="Author image"
							authorName="Bella Gates"
							authorClick="/"
							subtitle="15m"
							numberOfPostLikes="10"
							numberOfPostComments="1"
							numberOfPostShares="0"
							postImages={
								[
									{
										imageSrc: "https://images.unsplash.com/photo-1611108075836-3fb71c297ace?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
										imageAlt: "beautiful snowy mountain range",
									},
									{
										imageSrc: "https://images.unsplash.com/photo-1606851179505-616dbdcff3dc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
										imageAlt: "beautiful snowy mountain range"
									},
									{
										imageSrc: "https://images.unsplash.com/photo-1606851179505-616dbdcff3dc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
										imageAlt: "beautiful snowy mountain range"
									}
								]
							}
						/>
						<UserPost
							postText="The National Mall in Washington, D.C., was decorated on Monday with close to 200,000 flags representing the people who are unable to attend President-elect Joe Biden’s inauguration because of the coronavirus pandemic and restrictive security measures"
							authorImageUrl="https://images.unsplash.com/photo-1610984474942-201775d5ee9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							authorImageAlt="Author image"
							authorName="Bella Gates"
							authorClick="/"
							subtitle="15m"
							numberOfPostLikes="10"
							numberOfPostComments="1"
							numberOfPostShares="0"
							postImages={
								[
									{
										imageSrc: "https://images.unsplash.com/photo-1611108075836-3fb71c297ace?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
										imageAlt: "beautiful snowy mountain range",
									},
									{
										imageSrc: "https://images.unsplash.com/photo-1606851179505-616dbdcff3dc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
										imageAlt: "beautiful snowy mountain range"
									}
								]
							}
						/>
						<UserPost
							postText="The National Mall in Washington, D.C., was decorated on Monday with close to 200,000 flags representing the people who are unable to attend President-elect Joe Biden’s inauguration because of the coronavirus pandemic and restrictive security measures"
							authorImageUrl="https://images.unsplash.com/photo-1610984474942-201775d5ee9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							authorImageAlt="Author image"
							authorName="Bella Gates"
							authorClick="/"
							subtitle="15m"
							numberOfPostLikes="10"
							numberOfPostComments="1"
							numberOfPostShares="0"
							postImages={
								[
									{
										imageSrc: "https://images.unsplash.com/photo-1611108075836-3fb71c297ace?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
										imageAlt: "beautiful snowy mountain range",
									}
								]
							}
						/>
					</Container>
				</Grid>
				<Hidden smDown>
					<Grid item md={3} lg={3} xl={2} style={scrollStyle}>
						{/** TODO: Typographyt should be made into its own componetn with search icon */}
						<Typography>Contacts</Typography>
						<UnorderedListOfImagesWithText
							listItemsArray={
								[
									{
										image: <CircleImage
											alt="girl"
											onImageClickDestination="/"
											isOnline={false}
											src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
										/>,
										name: 'Blaine',
										action: null,
									},
									{
										image: <CircleImage
											alt="girl"
											onImageClickDestination="/"
											isOnline={true}
											src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
										/>,
										name: 'Jacob',
										action: null,
									},
									{
										image: <CircleImage
											alt="girl"
											onImageClickDestination="/"
											isOnline={true}
											src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
										/>,
										name: 'Jill',
										action: null,
									},
									{
										image: <CircleImage
											alt="girl"
											onImageClickDestination="/"
											isOnline={true}
											src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
										/>,
										name: 'Joe',
										action: null,
									},
									{
										image: <CircleImage
											alt="girl"
											onImageClickDestination="/"
											src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
										/>,
										name: 'Mary',
										action: null,
									}
								]
							}
						/>
					</Grid>
				</Hidden>
			</Grid>
		</>
	);
};