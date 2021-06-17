import React from "react";

const App = () => {

  const onReverseBtn = () => alert("re");
  const style = {
    color: 'blue',
    fontSize: '18px'
  };

    return (
      <>
        <h1>testreact</h1>
        <p style={style}>original</p>
        <button onClick={onReverseBtn}>Reverse Object</button>
      </>
    );
}

export default App;