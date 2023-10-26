import { createContext } from "react";

const PerezosoContext = createContext<PerezososStructure>(
  {} as PerezososStructure,
);

export default PerezosoContext;
