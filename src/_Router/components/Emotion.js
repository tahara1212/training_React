/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {

    // インポートしたcssを使用する場合
    const containerStyle = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    // inline stylesのように使用する場合
    const titleStyle = css({
        margin: 0,
        color: "#3d84a8"
    });

    // styled componentsのように使用する場合
    const SButton = styled.button`
        background-color: #abedd8;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
        }
    `;

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>- Emotion -</p>
            <SButton>FIGHT!!</SButton>
        </div>
    )
}