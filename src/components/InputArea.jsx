import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function onChangeHandling(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input value={inputText} onChange={onChangeHandling} type="text" />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
