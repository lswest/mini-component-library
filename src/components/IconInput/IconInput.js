import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-width": "1px",
    "--font-size": "0.75rem",
    "--padding": "4px",
    "--icon-offset": "18px",
  },
  large: {
    "--border-width": "2px",
    "--font-size": "1rem",
    "--padding": "7px",
    "--icon-offset": "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <InputWrapper
      style={styles}
      width={width}
      iconOffset={size === "small" ? 10 : 16}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledLabel htmlFor="custom-input">
        <Icon id={icon} size={size === "small" ? 10 : 16} strokeWidth={2} />
      </StyledLabel>
      <StyledInput
        id="custom-input"
        name="custom-input"
        type="text"
        placeholder={placeholder}
        size={size}
      />
    </InputWrapper>
  );
};

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 2px;
  bottom: 0;
  margin-block: auto;
  width: min-content;
  height: min-content;
`;

const StyledInput = styled.input`
  appearance: none;
  border: none;
  width: 100%;
  font-size: inherit;
  color: inherit;
  font-weight: 700;
  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }
  &:focus {
    outline-offset: 4px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  isolation: isolate;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  width: ${(props) => props.width}px;
  & input {
    padding: var(--padding) 0 var(--padding) var(--icon-offset);
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
