import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

const Button = (props) => {
    return (
        <div className={cx("container-btn")}>
            <button className={cx("btn-more")}>{props.title}</button>
        </div>
    );
};

export default Button;
