
interface IButtonLoginProps {
  type?: "submit" | "reset" | "button";
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({onClick, type, children}) => {
  return(
    <button type={type} onClick={onClick}>
        {children}
    </button>
  )
}