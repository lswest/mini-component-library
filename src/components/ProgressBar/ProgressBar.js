/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--radius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": "16px",
    "--radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={styles}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <ProgressBarInner value={value} maxed={value === 100} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  box-sizing: border-box;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  width: 100%;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarInner = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value}%;
  border-radius: inherit;
  border-top-right-radius: ${(props) => (props.maxed ? "inherit" : "0")};
  border-bottom-right-radius: ${(props) => (props.maxed ? "inherit" : "0")};
`;

export default ProgressBar;
