import { Link, NavLink } from "react-router-dom";
import { TLien, TSubmenu } from "./mockLiens";
import "./style.scss";

const IconLiens = ({ link, isListLink, style }: { link: TSubmenu | TLien, isListLink:boolean, style?: string}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { route, icon, text} = link;

  return (
    <>
    {isListLink ? <NavLink to={route} className="liensTextContainer">
        <div>{icon}</div>
        <div>{text}</div>
      </NavLink>:<Link to={route} className={`liensTextContainer ${style}`}>
        <div>{icon}</div>
        <div>{text}</div>
      </Link>}
     
      {/* {isSubmenu && isOpen && (
        <div style={{ marginLeft: 15, display: "grid", gap: 3 }}>
          {link.subLiens.map((el, idx) => {
            return <IconLiens key={idx} link={el} />;
          })}
        </div> 
      )}*/}
    </>
  );
};

export default IconLiens;
