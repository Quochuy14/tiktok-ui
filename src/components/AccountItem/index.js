import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/333426825_3265439147100097_8000194033862064325_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CwWlzVFSLR4AX_AfTSb&_nc_ht=scontent.fvca1-2.fna&oh=00_AfBCGgCsddPHoHbVjIe8Z7TwA-vd7FnpHXW430nI5rV4Uw&oe=647227AC" alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Truong Quoc Huy</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('user-name')}>quochuy14</span>
            </div>
        </div>
    );
}

export default AccountItem;