import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" render={() => <h1>adadad</h1>}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/302485226_888920605417854_2060518368122207698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=UEfgLqqHcAcAX-DkKYs&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDts8Rbc7k4jGhTxZmNLWLU63l57elFI9Uvlq9abD_OFg&oe=6365B4E2"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>daovannghia</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Dao Van Nghia</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
