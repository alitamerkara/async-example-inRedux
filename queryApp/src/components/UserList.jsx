import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/ApiSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { datas, error, loading } = useSelector((state) => {
    return {
      datas: state.api.datas,
      error: state.api.error,
      loading: state.api.loading,
    };
  });
  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchTodos());
        }}
      >
        Click
      </button>
      <div>{error && error}</div>
      <div>{loading && loading}</div>
      {datas.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.id}</div>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
