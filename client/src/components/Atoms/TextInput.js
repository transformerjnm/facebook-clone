import { Input } from '@material-ui/core';  
import { FilledInput, FormControl, IconButton, Grid } from '@material-ui/core';
import { lightTheme } from '../../theme';  //light secondary main
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ImageIcon from '@material-ui/icons/Image';
/**
 * Summary:
 * Should be full width by default as most of our uses are going to be full width. Needs to be able to be used for comment input, search bar, and messages. Should have at least a 
 * variant for searchbar and a variant for messages. Messages variant should have the option to send emojis and images. 
 * 
 * Props: 
 * variant: search, message, comment (tells us which input to use)
 * fullWidth: if not passed default to true. if false set width to a certain width.
 */
export default props => {

	let input;

	const formControlStyles = {
		flexDirection: "row"
	};

	const messageStyles = {
		padding: "4px",
		minHeight: "25px"
	};

	if(props.variant === "search"){
		input = <FormControl hiddenLabel fullWidth>
					<FilledInput 
						disableUnderline={true} 
						margin="dense" 
						placeholder="Search Facebook" 
						startAdornment={ <IconButton>
											<SearchIcon color="secondary"/>
										 </IconButton> }
					 />
				</FormControl>;
	} else if(props.variant === "message"){
		input = <Grid container alignItems="center" justify="left">
					<Grid item xs={1} md={1}>
						<IconButton size="small">
							<ImageIcon />
						</IconButton>
					</Grid>
					<Grid item xs={3} md={3}>
						<FilledInput 
							style={messageStyles}
							disableUnderline={true} 
							margin="dense" 
							placeholder="Aa" 
							multiline
							endAdornment={ <IconButton size="small">
												<EmojiEmotionsIcon color="secondary"/>
											</IconButton> } 
						/>
					</Grid>
				</Grid>;
	}
	
	
  	return (
    	<>
			{input}	 
    	</>
  	);
}