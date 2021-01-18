import { IconButton } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import { lightTheme } from '../../theme';

import styles from '../Atoms/Atom-Styles/NavigationIconLink.module.css';

/**
 * Summary:
 * Button Icon with no text that is a navigation link. 
 * Also has navigation styles. This component will wrap 
 * a icon as children from MUI. the navLinkDestination is 
 * is the url path the usr goes to on click of the component
 *
 * Props:
 * navLinkDestination: the path that the url should go to on click of the component
 */

export default props => {
  return (
    <div className={styles.navIconContainer}>
      <IconButton
        style={{ background: 'transparent' }}
        disableFocusRipple='true'
        disableRipple='true'
        >
          <NavLink
            exact
            to={props.navLinkDestination}
            style={{
              color: lightTheme.palette.primary.dark,
              paddingTop: '5px'
            }}
            activeClassName={styles.active}
          >
            {props.children}
          </NavLink>
        </IconButton>
    </div>
  );
};
