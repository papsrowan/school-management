import { listLiens } from "./components/iconsLiens";
import { CiSettings } from "react-icons/ci";
import IconLiens from "./components/iconsLiens/IconLiens";
import "./style.scss";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarContainer-logo">School Management</div>
      <div className="NavBarContainer-listeLiens">
        {listLiens.map((el, idx) => {
          return <IconLiens key={idx} link={el} isListLink={true} />;
        })}
      </div>
      <div className="NavBarContainer-setting">
        <IconLiens link={{icon:<CiSettings/>, route:'/', text:'Parametre',isSubmenu:false}} isListLink={false}/>
      </div>
    </div>
  );
};

export default NavBar;
