import React, { useState } from "react";
import { useSelector } from "react-redux";

const SendFileByUrl = ({ sendFileByUrl }) => {
  const [chatId, setChatId] = useState("");
  const [link, setLink] = useState();
  const [fileName, setFileName] = useState("");
  const [caption, setCaption] = useState("");

  const onChangeId = (event) => {
    setChatId(event.target.value);
  };

  const onChangeLink = (event) => {
    setLink(event.target.value);
    setFileName(decodeURI(event.target.value.split("/").pop()));
    setCaption(event.target.value.match(/([^/]+)\.[^\.]+$/)[1]);
  };

  const handleSendFileByUrl = () => {
    setChatId("");
    setLink("");
    sendFileByUrl(chatId, link, fileName, caption);
  };

  return (
    <>
      <input
        className="form-control fs-4 my-2"
        placeholder="Enter user id"
        onChange={onChangeId}
        value={chatId}
      />
      <input
        className="form-control fs-4 my-2 "
        placeholder="Enter link"
        onChange={onChangeLink}
        value={link}
      />
      <button
        className="btn btn-success my-2"
        onClick={() => handleSendFileByUrl()}
      >
        SendFileByUrl
      </button>
    </>
  );
};

export default SendFileByUrl;
