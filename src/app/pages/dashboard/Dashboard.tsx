import { Link } from 'react-router-dom'
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {
  const { nomeDoUsuario, logout} = useUsuarioLogado();

  return (
    <>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>
      <button onClick={logout}>Logout</button>
      <Link to="/entrar">Login</Link>
    </>
  )
}