import { Grid, Typography } from '@material-ui/core';  
import CircleImage from '../Atoms/CircleImage';
import { lightTheme } from '../../theme';
/**
 * Summary:
 * A comment that has the users profile picture, username, and comment.
 * 
 * Props: 
 * children: CircleImage that is wrapped by this component
 * Name
 * AuthorComment
 * 
 */
export default props => {
	const commentContainer = {
		width: 'auto',
		backgroundColor: 'lightgrey',
		borderRadius: '15px',
		padding: '.25rem' 
	};
	return (
		<Grid container alignContent="center" spacing={1}>
			<Grid item>
				<Grid container justify="flex-start">
					{props.children}
				</Grid>
			</Grid>
			<Grid item>
				<div style={commentContainer}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="subtitle2">
								{props.name}
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body2">
								{props.authorComment}
							</Typography>
						</Grid>
					</Grid>
				</div>
				<Grid container>
					<Grid item xs={1}>
						<Grid container>
							<Typography variant="body2">
								Like
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={1}>
						<Grid container>
							<Typography variant="body2">
								Reply
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={1}>
						<Grid container justify="center">
							<Typography variant="body2">
								{props.timePosted}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}