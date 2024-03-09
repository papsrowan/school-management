/* eslint-disable react/style-prop-object */
import IconLiens from "../../../NavBar/components/iconsLiens/IconLiens";
import ProfilePopIconLienMock from "../../utils/profilPopIconLienMock";
import "./style.scss";

function ProfilePup({
  style,
  handleClose,
}: {
  style: string;
  handleClose: () => void;
}) {
  return (
    <div className={`profilePupContainer ${style}`}>
      {ProfilePopIconLienMock.map((el, idx) => {
        return (
          <IconLiens
            key={idx}
            link={{
              icon: el.icon,
              route: el.route,
              text: el.text,
              isSubmenu: false,
            }}
            isListLink={false}
            style="gris"
          />
        );
      })}
    </div>
  );
}

export default ProfilePup;
