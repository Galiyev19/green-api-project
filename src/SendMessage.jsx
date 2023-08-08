import React, { useState } from "react";

const SendMessage = ({ sendMessage }) => {
  const [chatId, setChatId] = useState("");
  const [message, setMessage] = useState("");

  const onChangeId = (event) => {
    setChatId(event.target.value);
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleMessage = () => {
    setChatId("");
    setMessage("");
    sendMessage(chatId, message);
  };
  return (
    <>
      <input
        className="form-control fs-4 my-2"
        placeholder="Enter user id"
        onChange={onChangeId}
        value={chatId}
      />
      <textarea
        className="form-control fs-4"
        rows="6"
        placeholder="Type text"
        onChange={onChangeMessage}
        value={message}
      ></textarea>
      <button
        className="btn btn-success fs-4 my-2"
        onClick={() => handleMessage()}
      >
        SendMessage
      </button>
    </>
  );
};

export default SendMessage;
