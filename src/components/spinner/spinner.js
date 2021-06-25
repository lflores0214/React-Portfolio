import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = (props) => {
  console.log(props);
  return (
    <SpinnerOverlay sm={props.sm}>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
