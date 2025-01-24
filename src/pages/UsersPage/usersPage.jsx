import React from "react";
import "./UsersPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/reducers/useReducers";
import UserCard from "../../components/user/UserCard";

const UsersPage = () => {
  const dispatch = useDispatch();

  const { users, isFetching } = useSelector((state) => state.usersPage);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <>
      <h1 className="titleName">User Names</h1>
      <div className="users-page">
        {isFetching ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          users.map((user) => (
           <UserCard user={user} key={user.id} />
          ))
        )}
      </div>
    </>
  );
};

export default UsersPage;
