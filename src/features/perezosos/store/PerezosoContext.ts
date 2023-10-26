import { Dispatch, SetStateAction, createContext } from "react";

interface PerezosoContextProps {
  perezosos: PerezososStructure[];
  setPerezosos: Dispatch<SetStateAction<PerezososStructure[]>>;
}

const PerezosoContext = createContext<PerezosoContextProps>(
  {} as PerezosoContextProps,
);

export default PerezosoContext;
