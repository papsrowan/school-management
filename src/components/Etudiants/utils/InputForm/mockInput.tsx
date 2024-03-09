import { TInput } from "../../components/InputForm/InputForm";
import { MdOutlineDashboard } from "react-icons/md";

type TMockInput = TInput[];

export const mockInputForm: TMockInput = [
  { icon: <MdOutlineDashboard />, inputType: "text", label: "Nom & Prenom" },
  {icon: <MdOutlineDashboard />, inputType: "text", label: "Date de Naissance"},
  {icon: <MdOutlineDashboard />, inputType: "text", label: "Classe"},
  {icon: <MdOutlineDashboard />, inputType: "text", label: "Email"},
  {icon: <MdOutlineDashboard />, inputType: "text", label: "shcool"},
  {icon: <MdOutlineDashboard />, inputType: "text", label: "shcool"},
  {icon: <MdOutlineDashboard />, inputType: "text", label: "shcool"},
];