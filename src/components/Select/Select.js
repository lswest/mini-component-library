import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <SelectWrapper>
      <SelectBox
        value={value}
        onChange={onChange}
        displayedValue={displayedValue}
      >
        {children}
      </SelectBox>
      <StyledIcon id="chevron-down" size={16} strokeWidth={2} />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: min-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin-block: auto;
  color: inherit;
`;

const SelectBox = styled.select`
  appearance: none;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  border-width: 0;
  width: calc(${(props) => props.displayedValue.length}ch + 68px);
  background: ${COLORS.transparentGray15};
  color: inherit;
`;

export default Select;
