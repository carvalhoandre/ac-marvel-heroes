import React from "react";

import * as styles from "./styles";

export const Footer: React.FC = () => {
  return (
    <styles.Footer>
      <styles.Content>
        <styles.Typography>
          &#169; André Carvalho. All rigths reserved
        </styles.Typography>
      </styles.Content>
    </styles.Footer>
  );
};
