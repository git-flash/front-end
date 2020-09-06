import React, { FC } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px 24px;
  background-color: blue;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const _Button: FC = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default _Button;
