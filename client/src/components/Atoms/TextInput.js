import { Input } from '@material-ui/core';  

/**
 * Summary:
 * Should be full width by default as most of our uses are going to be full width. Needs to be able to be used for comment input, search bar, and messages. Should have at least a 
 * variant for searchbar and a variant for messages. Messages variant should have the option to send emojis and images. 
 * 
 * Props: 
 * variant: search, message
 * fullWidth: if not passed default to true. if false set width to a certain width.
 */
export default props => {
  	return (
    	<>
     		<p>Text Input</p>
    	</>
  	);
}