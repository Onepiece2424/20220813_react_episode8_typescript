import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: "grey"
};
