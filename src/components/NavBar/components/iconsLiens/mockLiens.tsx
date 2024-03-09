import { ReactNode } from "react";
import { SiMicrosoftonenote } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

type TLien = {
  icon: ReactNode;
  text: string;
  route: string;
  isSubmenu: false;
};

type TSubmenu = {
  icon: ReactNode;
  text: string;
  route: string;
  isSubmenu: true;
  subLiens: TLiens;
};

type TLiens = (TSubmenu | TLien)[];

const listLiens: TLiens = [
  {
    icon: <MdOutlineDashboard />,
    text: "Tableau de bord",
    route: "/",
    isSubmenu: false,
  },
  {
    icon: <FaPeopleRoof />,
    text: "Classes",
    route: "/classes",
    isSubmenu: false,
  },
  {
    icon: <IoIosPeople />,
    text: "Eleves",
    route: "/eleves",
    isSubmenu: false,
  },
  {
    icon: <SiMicrosoftonenote />,
    text: "Bulletins",
    route: "/bulletins",
    isSubmenu: false,
  },
  {
    icon: <FaChalkboardTeacher />,
    text: "Enseignants",
    route: "/enseignants",
    isSubmenu: false,
  //   subLiens: [
  //     {
  //       icon: <MdOutlineDashboard />,
  //       text: "Sub link",
  //       route: "/enseignants/1",
  //       isSubmenu: false,
  //     },
  //     {
  //       icon: <MdOutlineDashboard />,
  //       text: "Sub link",
  //       route: "/enseignants/1",
  //       isSubmenu: false,
  //     },
  //     {
  //       icon: <MdOutlineDashboard />,
  //       text: "Sub link",
  //       route: "/enseignants/1",
  //       isSubmenu: false,
  //     },
  //   ],
  },
];

export type { TLien, TSubmenu, TLiens };

export { listLiens };
