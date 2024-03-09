import { ReactNode } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { GiLaurelsTrophy } from "react-icons/gi";

type TmockTotal = {
  icon: ReactNode,
  nombre: string,
  text: string,
}[];

const MockTotal: TmockTotal = [
  {
    icon: <FaPeopleLine />,
    nombre: "1023 +",
    text: "Eleves",
  },{
    icon: <FaChalkboardTeacher />,
    nombre: "300 +",
    text: "Enseignants",
  }
  ,{
    icon: <GiLaurelsTrophy />,
    nombre: "999 +",
    text: "Laureats",
  }
];

export default MockTotal
