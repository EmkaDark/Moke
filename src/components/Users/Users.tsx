import { FC } from "react";
import "./Users.scss";
import { UserData } from "../../data/Users";
const Users: FC = () => {
  return (
    <ul className="users flex">
      {UserData?.map((user) => (
        <li key={user.link} className="user-card">
          <div className="user flex">
            <img src={user.img} alt="Lorenzo" />
            <div className="user_data flex">
              <b className="user_data-name">{user.name}</b>
              <p className="user_data-link">{user.link}</p>
            </div>
          </div>
          <p className="user_comment">{user.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
