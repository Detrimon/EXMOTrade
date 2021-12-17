import { icons } from "./icons";

const Icon = ({ name }) => {
  return <>{icons[name] ? icons[name] : null}</>;
};

export default Icon;
