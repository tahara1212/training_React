import { memo } from "react";

export const ChildArea = memo((props) => {
    console.log("レンダリング");

    const { open, onClickClose} = props;

    const style = {
        with: "100%",
        height: "500px",
        backgroundColor:"khaki"
    }

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>child components</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ): null}
            
        </>
    );
});