import { PropsWithChildren, useState } from "react";
import PerezosoContext from "./PerezosoContext";

const PerezosoProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [perezosos, setPerezosos] = useState<PerezososStructure[]>([]);
  return (
    <PerezosoContext.Provider value={{ perezosos, setPerezosos }}>
      {children}
    </PerezosoContext.Provider>
  );
};

export default PerezosoProviderWrapper;
