import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Login () {

    // Hook para la foto de perfil del usurios
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    // Hook para auteticacion de usurios
    const [usuario, setUsuario] = useState('');
    const [error, setError] = useState('');

    // Hook para pasar el dato del input
    const navigate = useNavigate();

    // Flujo de para la foto del usuario
    const handleFileChange = (e) => {
      const selected = e.target.files[0];
      if (selected) {
        setFile(selected);
      }
    };
  
    useEffect(() => {
      if (!file) return;
  
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
  
      return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    // flujo para validacion de usuario
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (usuario.trim() === '') {
        setError('El campo es obligatorio para el registro');
        return;
      }
    
      setError('');
    
      let imagenFinal = './icono.png'; // Valor por defecto
    
      // Si hay archivo seleccionado, lo convertimos a base64
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result;
          localStorage.setItem('imagen', base64);
          navigate('/Layouts', { state: { usuario, preview: base64 } });
        };
        reader.readAsDataURL(file);
      } else {
        // Si no hay archivo, guardamos imagen por defecto
        localStorage.setItem('imagen', imagenFinal);
        navigate('/Layouts', { state: { usuario, preview: imagenFinal } });
      }
      console.log('Success');
    };    

    return (
        <section onSubmit={handleSubmit} className='w-full mt-24 flex flex-col justify-center items-center gap-5 sm:gap-10'>
            <div className='flex flex-col text-center itenms-center'>
                <h1 className='text-3xl'> Ingresa un usuario y una </h1>
                <h1 className='text-3xl'> foto para continuar </h1>
            </div>

            <div>
                <form className='flex flex-col justify-center items-center gap-5 sm:gap-10'>
                  <div className="relative w-48 h-48">
                    <label
                    htmlFor="profileImage"
                    className="cursor-pointer w-full h-full block rounded-full border-2 border-gray-300 overflow-hidden bg-[#BEF0C2] shadow-md hover:opacity-90 transition">
                        {preview ? (
                            <img
                            src={preview}
                            alt="Foto de perfil"
                            className="w-full h-full object-cover"
                            />
                        ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-500">
                            <img src="./User.png" alt="referencia" className='w-12 h-12' />
                        </div>

                        )}
                    </label>
                    <input type="file" id="profileImage" accept="image/*" className="hidden" onChange={handleFileChange}/>
                  </div>
                  <p  className='w-auto text-center sm:p-0 p-2'>Haga clik en la circulo para seleccionar o cambiar su foto de usuario</p>
                  <input type="text" name="usuario" placeholder="Ingresa un usuario" className={`h-14 border-2 rounded-xl p-3 text-xl focus:outline-none 
                  ${error ? 'border-red-500' : 'border-[#BEF0C2]'} hover:h-16 transition-all duration-200`}
                  value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" to="/Layouts" className='w-40 h-12 text-1xl rounded-xl bg-[#3EB489] hover:bg-[#2F9C7C]'> Continuar</button>
                </form>
            </div>
        </section>
    )
}

export default Login