import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Chat from '../components/Chat';
import Bot from '../components/Bot';

// Componen de id, para ivita la rendirizacion de ID
const generarID = () => {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  };

function Layouts () {

    // Componente para copiar ID del usuario
    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(IDUser)
          .then(() => {
            alert("ID copiado: " + IDUser);
          })
          .catch(err => {
            console.error("Error al copiar", err);
          });
      };    

    // Componente de las vistas prederteminada al iniciar el chat.
    const [vistaActiva, setVistaActiva] = useState("bot");

    // Componen que genera el ID de usuario
    const [IDUser, setIDUser] = useState (() => {
        const idGuardado = sessionStorage.getItem('IDUser');
        return idGuardado || generarID();
    });

    useEffect(() => {
        sessionStorage.setItem('IDUser', IDUser);
    }, [IDUser]);

    console.log(`ID: ${IDUser}`);

    // Componente del despliegue del menu de navegacion
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Componente del menu de opciones
    const [Open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Componente para mostrar usuario y foto
    const location = useLocation();
    const { usuario, preview } = location.state || {};
    const Menu = () => setOpen (!Open); 

    // Componente que despliega el menu de informacion
    const [Showperfil, setShowperfil] = useState(false);
    const togglesubmenu = () => setShowperfil(!Showperfil);

    // Componente del restricion
    const navigate = useNavigate ();

    // Vista de la view de restrincion
    if (!usuario) {
        return (
            <div className="flex items-center justify-center mt-40 md:mt-52">
                <div className="flex flex-col justify-center items-center p-6 text-center">
                    <img src="./Logo.png" alt="" />
                    <h2 className="text-2xl mt-4"> Acceso denegado! </h2>
                    <p className="mb-4">Debes registrate para acceder.</p>
                    <button onClick={() => navigate("/Login")} className="px-4 py-2 bg-[#65c3A1] text-white rounded hover:bg-[#8BD2B8]">
                        Registrace
                    </button>
                </div>
            </div>
        );
    }

    // Componente del menu de perfil
    const [Show, setShow] = useState(false);
    const Profile = () => setShow(!Show);
    
    
    // Flujo de despligue del menu
    useEffect (() => {
        function handleOutsideClickside (event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen (false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClickside);
        return () => document.removeEventListener('mousedown', handleOutsideClickside);
    }, []);

    return (
        <div className='flex flex-col h-screen'>
            {/* Barra de navegación */}
            <div className='w-full relative flex justify-between items-center px-10 py-5 bg-[#ECF8F3]'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-4xl hidden md:block'>Whispeper</h1>
                    <img onClick={toggleMenu} src="./Menu.png" alt="menu" className='w-10 mt-1' />
                </div>

                {/* Informacion de usuario */}
                <div className='flex gap-5' ref={menuRef}>
                    <div className='flex items-center'>
                        <p className='text-2xl hidden md:block'> Bienvenido {usuario} ! </p>
                    </div>
                    <button onClick={Menu} className='flex items-center gap-2'> 
                        <img src={preview} alt="Perfil" className='w-10 h-10 rounded-full' />
                        <img src="./view.png" alt="Visualizacion" className='w-6 h-6' /> 
                    </button>
                </div>
                
                {/* SubMenu de informacion */}
                {Open && (
                    <div className="absolute right-10 mt-[260px] md:mt-60 w-48 bg-[#8BD2B8] rounded-lg shadow-lg z-50">
                        <ul className="py-2">
                        <p className='block md:hidden text-center'>Bienvenido {usuario}</p>
                        <button onClick={copiarAlPortapapeles} className='w-44 flex items-center text-center px-5 py-2 rounded-lg hover:bg-[#65c3A1] cursor-pointer gap-3 ml-2'>
                            <img className='w-7' src="./copy.png" alt="Copiar" />
                            ID : {IDUser}
                        </button>

                        {/* Botón Mi Perfil */}
                        <li onClick={togglesubmenu}
                            className="w-44 relative flex items-center px-5 py-2 rounded-lg hover:bg-[#65c3A1] cursor-pointer gap-3 ml-2"> 
                            <img className='w-7 h-7 rounded-full' src={preview} alt="" /> 
                            Mi Perfil 
                        </li>

                        {/* Salir */}
                        <li className="w-44 flex items-center px-5 py-2 rounded-lg hover:bg-[#65c3A1] cursor-pointer gap-3 ml-2"> 
                            <img className='w-7' src={'./Close.png'} alt="Cerrar" /> 
                            Salir 
                        </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex h-full relative'>
                {/* Opciones de chats */}
                <div className={`flex flex-col items-center h-full gap-10 bg-[#ECF8F3] transition-all duration-300 ease-in-out
                    ${isOpen ? 'w-full md:w-80' : 'w-0 overflow-hidden'}`}> 

                    <button onClick={() => setVistaActiva("bot")} 
                    className={`flex items-center gap-10 p-5 mt-10 rounded-lg bg-[#8BD2B8] hover:bg-[#65c3A1]
                        ${vistaActiva === "bot" ? 'ring-2 ring-[#4CAF50]' : ''}`}>
                    <img className='w-24' src="./chatbot.png" alt="Botchat" />
                    <p className='text-1xl'>BotChat</p>
                    </button>

                    <button onClick={() => setVistaActiva("chat")}
                    className={`flex items-center gap-10 p-5 rounded-lg bg-[#8BD2B8] hover:bg-[#65c3A1]
                        ${vistaActiva === "chat" ? 'ring-2 ring-[#4CAF50]' : ''}`}>
                    <img className='w-24' src="./chat-individual.png" alt="Chat individual" />
                    <p className='text-1xl text-center'>Chat <br /> Individual</p>
                    </button>

                </div>

                {/* Contenido del chat */}
                <main className={`w-auto transition-all duration-900 ease-in-out ${isOpen ? 'flex-0 md:flex-1 hidden md:block' : 'flex-1 block'}`}>
                    { vistaActiva ===  "chat" && <Chat /> }
                    { vistaActiva === "bot" && <Bot /> }
                </main>
            </div>
        </div>
    )
} 

export default Layouts;