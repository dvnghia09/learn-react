import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCameraAlt, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEmpty } from '@fortawesome/free-regular-svg-icons';
import SuggestedAccounts from './SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon icon={faHome} />}
                    iconSub={<FontAwesomeIcon icon={faHourglassEmpty} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUserFriends} />}
                    iconSub={<FontAwesomeIcon icon={faUser} />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon icon={faCamera} />}
                    iconSub={<FontAwesomeIcon icon={faCameraAlt} />}
                />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
