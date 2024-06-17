import { Link } from 'react-router-dom'
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {
  const usuarioLogadoContext = useUsuarioLogado();

  return (
    <>
      <p>Dashboard</p>
      <p>{usuarioLogadoContext.nomeDoUsuario}</p>
      <Link to="/entrar">Login</Link>
    </>
  )
}