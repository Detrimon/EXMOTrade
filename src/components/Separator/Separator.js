import styles from "./Separator.module.css";
import cn from "classnames";

const Separator = ({ size = "m" }) => {
  return (
    <span
      className={cn(styles.container, {
        [styles.sizeXS]: size === "xs",
        [styles.sizeS]: size === "s",
        [styles.sizeM]: size === "m",
        [styles.sizeL]: size === "l",
        [styles.sizeXL]: size === "xl",
      })}
    ></span>
  );
};

export default Separator;
