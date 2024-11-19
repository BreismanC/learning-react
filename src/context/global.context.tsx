/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const emptyGlobalState: number = 0;

export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => {},
});

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  const [value, setValue] = useState<number>(emptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context.value && context.value !== 0) {
    throw new Error(
      "GlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
