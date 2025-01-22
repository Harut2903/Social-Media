import React from "react";
import "./UsersPage.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocialAPI } from "../../api/api";
import { getUsersAC } from "../../store/reducers/useReducers";

const UsersPage = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.usersPage);

  useEffect(() => {
    SocialAPI.getUsers().then((res) => {
      dispatch(getUsersAC(res.data.items));
    });
  }, [dispatch]);

  return (
    <>
        <h1 className="titleName">User Names</h1>  
   <div className="users-page">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <div className="user-name">
            <h2>NAME: {user.name}</h2>
            <h3>ID: {user.id}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default UsersPage;
