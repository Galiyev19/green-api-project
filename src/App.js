import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserIdTokenInstanceInput from "./UserIdTokenInstanceInput";
import SendMessage from "./SendMessage";
import SendFileByUrl from "./SendFileByUrl";

const App = () => {
  const [data, setData] = useState(null);

  const IdInstance = useSelector((state) => state.userInfo.IdInstance);
  const ApiTokenInstance = useSelector(
    (state) => state.userInfo.ApiTokenInstance
  );

  const getSettings = async () => {
    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${IdInstance}/getSettings/${ApiTokenInstance}`
      );
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getStateInstance = async () => {
    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${ApiTokenInstance}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {}
  };

  const sendMessage = async (chatId, message) => {
    try {
      const obj = {
        chatId: chatId + "@c.us",
        message: message,
      };
      const response = await fetch(
        `https://api.green-api.com/waInstance${IdInstance}/sendMessage/${ApiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const sendFileByUrl = async (chatId, link, fileName, caption) => {
    try {
      const obj = {
        chatId: chatId + "@c.us",
        urlFile: link,
        fileName: fileName,
        caption: caption,
      };
      const response = await fetch(
        `https://api.green-api.com/waInstance${IdInstance}/sendFileByUrl/${ApiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const result = await response.json();
      setData(result);
    } catch (error) {}
  };

  useEffect(() => {}, [IdInstance, ApiTokenInstance]);

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex">
          <div className="d-flex flex-column p-4 w-50">
            {/* User Enter ID and Token Instance */}
            <UserIdTokenInstanceInput />
            {/* Button Get Settings and Instance */}
            <div className="d-flex flex-column my-5">
              <button
                className="btn btn-success my-2 fs-4"
                onClick={() => getSettings()}
              >
                getSettings
              </button>
              <button
                className="btn btn-success my-2 fs-4"
                onClick={() => getStateInstance()}
              >
                getStateInstance
              </button>
            </div>
            {/* Send Message */}
            <div className="d-flex flex-column my-5">
              <SendMessage sendMessage={sendMessage} />
            </div>
            {/* Send File By Url */}
            <div className="d-flex flex-column my-5">
              <SendFileByUrl sendFileByUrl={sendFileByUrl} />
            </div>
          </div>
          {/* SHOW INFO BLock */}
          <div className="d-flex flex-column w-50 p-3">
            {IdInstance !== null && IdInstance !== null ? (
              <div className="d-flex flex-column">
                <h3>IdInstance: {IdInstance} </h3>
                <h3>ApiTokenInstance: {ApiTokenInstance}</h3>
              </div>
            ) : null}
            <h4 className="my-2">Response: </h4>
            <div className="d-flex flex-column flex-wrap text-wrap border border-dark p-2 rounded-3 h-100">
              <span className="fs-5">
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
