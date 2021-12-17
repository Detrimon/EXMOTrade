import { icons } from "./icons";

type TIconProps = {
  name: string;
};

const Icon = ({ name }: TIconProps) => {
  return <>{icons[name] ? icons[name] : null}</>;
};

export default Icon;
