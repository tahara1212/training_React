import React from "react";


const ColorMsg = (props) => {
    console.log(props);

    const { color, name } = props;

    const style = {
        color: color,
    }

    return (
        <>
            <h1 style={style}>私の名前は{name}です。</h1>
        </>
    );
}

export default ColorMsg;