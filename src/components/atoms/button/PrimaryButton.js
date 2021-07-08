/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
       const { children } = props;
       return (
              <SButton>{children}</SButton>
       )
}

// 共通ボタン
const SButton = styled(BaseButton)`
       background-color: #40514e;
`;