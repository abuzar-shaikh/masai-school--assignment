// import module.css here;
import { useState } from "react";
import style from "./userDetails.module.css";
const UserDetails = ({ elem }) => {
  const [state, setstate] = useState(true);
  const toggleBtn = () => {
    setstate(!state);
  };
  return (
    <>
      <div
        id={style.mainDiv}
        data-testid="user-container"
        style={{
          border: "1px solid black",
          margin: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        {
          /* user image */
          <img
            src={elem.avatar}
            alt="abc"

            // style={{ width: "60px", height: "60px", }}
          />
        }
        <div>
          <div id={style.userName}>
            <h3 data-testid="user-fname">{elem.first_name}</h3>
            <h3 data-testid="user-lname">{elem.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{elem.address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma" id={style.Karma}>
            karma <br />
            <br />
            {elem.karma}
          </h3>
        </div>
        <div>
          <h3 data-testid="user-followers">
            followers <br />
            <br />
            {elem.followers}
          </h3>
        </div>
        <div>
          <h3 data-testid="user-posts">
            posts <br /> <br />
            {elem.posts}
          </h3>
        </div>
        <button data-testid="follow-btn" onClick={toggleBtn}>
          {state ? "follow" : "Unfollow"}
        </button>
      </div>
    </>
  );
};
export default UserDetails;
