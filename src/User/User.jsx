import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  const { usuario, preview } = location.state || {};

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Perfil de {usuario}</h1>
      <img src={preview} alt="Foto de perfil" className="w-32 h-32 rounded-full" />
    </div>
  );
}

export default User;
