import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Chat () {

    // Componente para los datos del usuario
    const location = useLocation();
    const { preview } = location.state;

    // Componente para ver menu de invitacion
    const [open, setOpen] = useState(false);

    // Componentes para tutorial de uso (Presentacion)
    const [tutorial, setTutorial] = useState(true);
    // Copiar ID
    const [id, setId] = useState(false);
    // Ingrese ID.
    const [ingresar, setIngresar] = useState(false)


    return (
        <div className="flex flex-col justify-between h-full relative">

            {ingresar && (
                <div className='flex justify-center items-center absolute inset-0 z-30'>
                    <div className='absolute inset-0 bg-gray-600 opacity-50'></div>
                    <div>

                    </div>
                </div>
            )}

            {id && (
                <div className='flex justify-center items-center absolute inset-0 z-30'>
                    <div className='absolute inset-0 bg-gray-600 opacity-50'></div>
                    <div className='flex flex-col justify-center items-center relative z-10'>
                        <p className='text-center text-white text-2xl p-6'> 
                            Necesitas el ID del usuario para iniciar una conversación. <br />
                            Encuentra y copia el ID en la esquina superior izquierda.
                        </p>
                        <div className='flex justify-center items-center mt-4'>
                            <div className='hidden md:flex flex-col items-center'>
                                <div className='flex justify-center items-center h-16 p-2 gap-3 bg-[#ECF8F3]'>
                                    <p className='text-3xl' >Bienvenido Usuario ! </p>
                                    <img className='w-12 h-12' src="./icono.png" alt="" />
                                    <img className='w-9 h-9' src="./view.png" alt="" />
                                </div>
                                <div className='w-72 bg-[#8BD2B8] rounded-xl ml-24 mt-2'>
                                    <div className='flex justify-center items-center p-3 gap-4'>
                                        <img className='w-8' src="./copy.png" alt="" />
                                        <p className='text-2xl'> ID : VG6BVH </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:hidden'>
                                <div className='flex justify-end items-center gap-2'>
                                    <img className='w-11 h-11' src="./icono.png" alt="" />
                                    <img className='w-8 h-8' src="./view.png" alt="" />
                                </div>
                                <div className='w-44 h-20 flex flex-col justify-center items-center rounded-xl bg-[#8BD2B8] mt-4'>
                                    <p className='text-1xl'>Bienvenido Usuario</p>
                                    <div className='flex gap-6 mt-2'>
                                        <img className='w-6' src="./copy.png" alt="" />
                                        <p> ID : VG6BVH </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-10 gap-16'>
                            <button onClick={ () => {setTutorial(true); setId(false);}}>
                                <img className='w-14' src="./back.png" alt="" />
                            </button>
                            <button onClick={ () => {setIngresar(true); setId(false);}} >
                                <img className='w-14' src="./turn.png" alt="" />
                            </button>
                        </div>
                    </div>

                </div>
            )}

            {tutorial && (
                <div className='flex justify-center items-center absolute inset-0 z-30'>
                    <div className='absolute inset-0 bg-slate-600 opacity-50'></div>
                    <div className='flex flex-col justify-center items-center relative z-10 '>
                        <p className='text-center text-white text-2xl p-4' >
                            Bienvenido al chat individual. <br />
                            Presiona continuar para empezar a conversar con tus amigos.
                        </p>
                        <div className='flex gap-12 mt-10'>
                            <button className='w-32 h-10 rounded-xl text-2xl bg-[#65C3A1]' 
                            onClick={ () => setTutorial(false)} > 
                                Omitir 
                            </button>
                            <button className='w-32 h-10 rounded-xl text-2xl bg-[#65C3A1]'
                            onClick={ () => { setId(true); setTutorial(false);}}> 
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {open && (
                <div className='flex justify-center items-center absolute inset-0 z-30'>
                    <div className='absolute inset-0 bg-gray-700 opacity-50'></div>
                    <div className='w-80 h-96 flex flex-col justify-center items-center rounded-2xl bg-[#8BD2B8] gap-5 relative z-10'>
                        <button onClick={ () => setOpen(false)}>
                            <img className='w-8 ml-60 mt-[-50px]' src="./X.png" alt="" />
                        </button>
                        <p className='text-center text-2xl mt-[-10px]'> Ingrese el ID el usuario <br /> para empezar una conversacion. </p>
                        <input className=' rounded-xl focus:outline-none p-1 px-3' placeholder='Ingrese el ID...' type="text" />
                        <button className='w-28 h-8 rounded-xl bg-[#3EB489] mt-4'>
                            Continuar
                        </button>  
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center bg-[#65C3A1] p-3 gap-2">
                <img className="w-12 h-12 rounded-full" src={preview} alt="Logo" />
                <h1 className="text-3xl" > Chat Indiviual </h1>
                <button onClick={() => setOpen(true)}>
                    <img className='w-12 h-12' src="./chat.png" alt="" />
                </button>
            </div>

            <div className="flex justify-center items-center p-6">
                <input className="w-80 md:w-96 h-9 border border-[#3EB489] rounded-xl focus:outline-none p-2" type="text"/>
                <button className=" absolute z-10 ml-[280px] md:ml-[335px]">
                    <img className="w-8 h-8" src="./Enviar.png" alt="Enviar" />
                </button>
            </div>
        </div>
    )
}

export default Chat 