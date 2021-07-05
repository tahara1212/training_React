import { memo } from "react";

export const ChildArea = memo((props) => {

    const { open } = props;

    const style = {
        with: "200px",
        height: "200px",
        backgroundColor: "blue",
        color: "white"
    }

    const dataArr = [...Array(2000).keys()];
    // console.log(dataArr);
    dataArr.forEach(() => {
        console.log("...");
    });
    return (
        <>
            {open && <div style={style}><p>yyyy</p></div>}
        </>
    )
});