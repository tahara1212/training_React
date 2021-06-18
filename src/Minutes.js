import React, { useEffect, useState } from "react";

const Minutes = () => {


    /**
     * state
     * useStateを分割代入
     * 第一引数に変数名、第二引数に関数名
     */
    const [num, setNum] = useState();

    /**
     * ueEffect
     * 末尾の引数に指定した変数が更新された場合のみレンダリングする
     */
    useEffect(() => {
        alert();
    }, [num]);

    return (
        <>
        </>
    );
}