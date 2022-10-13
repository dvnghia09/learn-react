import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function Accountitem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/272662112_756508631992386_3696675209599446882_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xxzbiijuX5YAX_M-kf9&tn=0A6omzuMTuu7Lcj8&_nc_ht=scontent.fhan14-3.fna&oh=00_AT90WZRl891a8eDyZGKdQ3zCIBMUKd_f6rMSOxec6LSxvQ&oe=63498009"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default Accountitem;
