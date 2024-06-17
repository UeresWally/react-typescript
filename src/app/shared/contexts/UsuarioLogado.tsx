import { createContext, ReactNode } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  // children: ReactNode;
}
const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    
  return(
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Wallace'}}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}