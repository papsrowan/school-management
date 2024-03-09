import { ReactNode } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
  TbCircleNumber7,
  TbCircleNumber8,
  TbCircleNumber9,
} from "react-icons/tb";
type TClasseClassementMock = {
  icon: ReactNode;
  text: string;
  route: string;
  moyenne: string;
  evolution: ReactNode;
}[];
const ClasseClassementMock: TClasseClassementMock = [
  {
    icon: <TbCircleNumber1 />,
    text: "3eme Esp",
    route: "/3eme",
    moyenne: "9.44",
    evolution: <FiChevronUp />,
  },
  {
    icon: <TbCircleNumber2 />,
    text: "2nd C",
    route: "/3eme",
    moyenne: "14.56",
    evolution: <FiChevronDown />,
  },
  {
    icon: <TbCircleNumber3 />,
    text: "6eme A",
    route: "/3eme",
    moyenne: "14.56",
    evolution: <FiChevronDown />,
  },
  {
    icon: <TbCircleNumber4 />,
    text: "Tle A4Esp",
    route: "/3eme",
    moyenne: "8.66",
    evolution: <FiChevronUp />,
  },
  {
    icon: <TbCircleNumber5 />,
    text: "1ere C",
    route: "/3eme",
    moyenne: "12.56",
    evolution: <FiChevronDown />,
  },
  {
    icon: <TbCircleNumber6 />,
    text: "5eme B",
    route: "/3eme",
    moyenne: "12.56",
    evolution: <FiChevronDown />,
  },
  {
    icon: <TbCircleNumber7 />,
    text: "4eme",
    route: "/3eme",
    moyenne: "12.56",
    evolution: <FiChevronUp />,
  },
  {
    icon: <TbCircleNumber8 />,
    text: "1ere A",
    route: "/3eme",
    moyenne: "12.56",
    evolution: <FiChevronUp />,
  },
  {
    icon: <TbCircleNumber9 />,
    text: "Tle C",
    route: "/3eme",
    moyenne: "14.56",
    evolution: <FiChevronDown />,
  },
  {
    icon: <TbCircleNumber1 />,
    text: "Tle D",
    route: "/3eme",
    moyenne: "14.56",
    evolution: <FiChevronUp />,
  },
];

export default ClasseClassementMock;
