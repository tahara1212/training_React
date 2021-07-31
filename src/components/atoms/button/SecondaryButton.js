/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
       const { children, onClick } = props;
       return (
              <SButton onClick={onClick}>{children}</SButton>
       )
}

// 共通ボタン
const SButton = styled(BaseButton)`
       background-color: #11999e;
`;