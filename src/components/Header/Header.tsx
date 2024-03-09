import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./style.scss";
import ProfilePup from "./components/profilPop/ProfilePup";

const Header = () => {
  const [setshowPop, setSetshowPop] = useState(false);

  const handleClick = () => {
    setSetshowPop((prev) => !prev);
  };
  return (
    <>
      <div className="headerContainer">
        <IoIosNotificationsOutline />
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
