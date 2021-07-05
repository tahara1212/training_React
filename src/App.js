import { useState } from "react";
import { ChildArea } from "./components/ChildArea";

export const App = () => {

    const [text, setText] = useState('');
    const [open, setOpen] = useState('false');

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    return (
        <>
            <div>
                <input type="text" onChange={onChangeText} value={text} />
                <br />
                <br />
                <button onClick={onClickOpen}>表示</button>
                <ChildArea open={open} />
            </div>
        </>
    )
}