import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {
  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  return (
    <>
      <p>Dashboard</p>
      <p>{usuarioLogadoContext.nomeDoUsuario}</p>
      <Link to="/entrar">Login</Link>
    </>
  )
}