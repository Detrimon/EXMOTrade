import styles from "./Separator.module.css";
import cn from "classnames";

type TSeparatorProps = {
  size?: "xs" | "s" | "m" | "l" | "xl";
};

const Separator = ({ size = "m" }: TSeparatorProps) => {
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
