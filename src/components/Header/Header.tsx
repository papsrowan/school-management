import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./style.scss";
import ProfilePup from "./components/profilPop/ProfilePup";

const Header = () => {
  const [setshowPop, setSetshowPop] = useState(false);
  const [notifNbre, setNotifNombre] = useState<number>(1);
  const handleClick = () => {
    setSetshowPop((prev) => !prev);
  };
  return (
    <>
      <div className="headerContainer">
        <div>
          <IoIosNotificationsOutline />
          {notifNbre >= 1 ? (
            <span className="headerContainer-nbre-notif">{notifNbre}</span>
          ) : ""}
        </div>
        <div></div>
        <img src="./profil.png" alt="" />
        <span>Yann Rowan</span>
        <div>
          {setshowPop ? (
            <FiChevronDown onClick={handleClick} />
          ) : (
            <FiChevronRight onClick={handleClick} />
          )}
          <ProfilePup
            style={setshowPop ? "visible" : "mask"}
            handleClose={() => {
              setSetshowPop((prev) => false);
              console.log(setshowPop);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
