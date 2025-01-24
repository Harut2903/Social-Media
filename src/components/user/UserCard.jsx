import React from 'react'
import "./UserCard.css"
import userLogo from "../../assets/userIcon.png"

const UserCard = ({user}) => {
  return (
    <div className="user-card" >
              <div className="user-name">
                <h2>{user?.name}</h2>
                <img className='userIcon' src={user?.photos?.large === null ? userLogo : user?.photos?.large}  />
                <h3>{user?.id}</h3>
                <button className='follow'>FOLLOW</button>
              </div>
     </div>
  )
}

export default UserCard
