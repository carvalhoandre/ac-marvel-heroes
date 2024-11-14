import React from "react";

import * as styles from "./styles";

const Footer: React.FC = () => {
  return (
    <styles.Footer>
      <styles.Content>
        <styles.Typography>
          &#169; André Leite Carvalho. All rigths reserved
        </styles.Typography>
      </styles.Content>
    </styles.Footer>
  );
};

export { Footer };
