import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIdInstance,
  changeApiTokenInstance,
} from "./store/slices/userSlice";

function UserIdTokenInstanceInput() {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const dispatch = useDispatch();
  const IdInstance = useSelector((state) => state.userInfo.IdInstance);
  const ApiTokenInstance = useSelector(
    (state) => state.userInfo.ApiTokenInstance
  );

  const onChangeId = (event) => {
    setIdInstance(event.target.value);
    dispatch(changeIdInstance(event.target.value));
  };

  const onChangeApiToken = (event) => {
    setApiTokenInstance(event.target.value);
    dispatch(changeApiTokenInstance(event.target.value));
  };

  const save = () => {
    const obj = {
      idInstance: IdInstance,
      ApiTokenInstance: ApiTokenInstance,
    };

    localStorage.setItem("instance", JSON.stringify(obj));
    dispatch(changeIdInstance(obj.idInstance));
    dispatch(changeApiTokenInstance(obj.ApiTokenInstance));

    setIdInstance("");
    setApiTokenInstance("");
  };
  return (
    <>
      <input
        type="text"
        className="form-control mb-2 fs-4"
        placeholder="Enter idInstance"
        onChange={onChangeId}
        value={idInstance}
      />
      <input
        type="text"
        className="form-control mb-2 fs-4"
        placeholder="Enter ApiTokenInstance"
        onChange={onChangeApiToken}
        value={apiTokenInstance}
      />
      <button className="btn btn-success my-2 fs-4" onClick={() => save()}>
        Save
      </button>
    </>
  );
}

export default UserIdTokenInstanceInput;
