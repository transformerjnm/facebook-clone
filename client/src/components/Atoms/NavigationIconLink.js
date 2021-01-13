import { IconButton } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import { lightTheme } from '../../theme';

import styles from '../Atoms/Atom-Styles/NavigationIconLink.module.css';

/**
 * Summary:
 * Button Icon with no text that is a navigation link. Also has navigation styles.
 * Will pass the navIcon from MUI and the navLinkDestination as props when rendering
 * the different icons.
 *
 * Props:
 * navIcon
 * navLinkDestination
 */

export default ({ navLinkDestination, navIcon }) => {
  return (
    <div className={styles.navIconContainer}>
      <IconButton
        style={{ background: 'transparent' }}
        disableFocusRipple='true'
        disableRipple='true'
        children={
          <NavLink
            exact
            to={navLinkDestination}
            style={{
              color: lightTheme.palette.primary.dark,
              paddingTop: '5px'
            }}
            activeClassName={styles.active}
          >
            {navIcon}
          </NavLink>
        }
      ></IconButton>
    </div>
  );
};
