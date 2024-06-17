import { useContext, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputPasswordRef = useRef<HTMLInputElement>(null)
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  const handleEntrar = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <div>
      <p>
        {usuarioLogadoContext.nomeDoUsuario}
      </p>
      <form>
        <InputLogin
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          type="password"
          label="Senha"
          value={password}
          onChange={newValue => setPassword(newValue)}
          ref={inputPasswordRef}
        />
        <ButtonLogin
          type="button"
          onClick={handleEntrar}
        >
          Entrar
        </ButtonLogin>
      </form>
    </div>
  )
}