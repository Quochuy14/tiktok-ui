import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Compo = 'button';
    const _props = {
        onClick,
        ...passProps
    };

    if (disabled) {
        delete _props.onClick;
    }

    if (to) {
        _props.to = to;
        Compo = Link
    }
    else if (href) {
        _props.href = href;
        Compo = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
        disabled,
    });

    return (
        <Compo className={classes} {..._props}>
            <span className={cx('title')}>{children}</span>
        </Compo>
    );
}

export default Button;