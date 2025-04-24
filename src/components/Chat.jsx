import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Chat () {

    // Componente para los datos del usuario
    const location = useLocation();
    const { usuario, preview } = location.state || {};
    const Menu = () => setOpen (!Open);

    // Componente para ver menu de invitacion
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full flex flex-col justify-between h-full relative">
            {/* Menu de invitacion */}
            {open && (
                <div className='absolute inset-0 z-30' >
                    <div className='absolute inset-0 bg-gray-500 opacity-50'></div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className='w-80 h-96 flex flex-col items-center rounded-2xl bg-[#65c3A1] gap-4 relative z-10'>
                            <button onClick={() => setOpen(false)}>
                                <img className='w-10 h-10 ml-64' src="./X.png" alt="Close" />
                            </button>
                            <img className='w-24 h-24' src="./referencia.png" alt="Imagen" />
                            <p className=' text-2xl text-center'> Ingrese el ID del usuario <br /> para empazar un chat </p>
                            <input className='rounded-lg p-1 focus:outline-none' type="text" placeholder='Ingrese el ID del usuario' />
                            <button className='w-28 h-8 rounded-lg bg-[#3EB489]'> Empezar </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cabezara */}
            <div className="flex justify-center bg-[#65C3A1]">
                <div className='flex justify-center items-center p-2 gap-2'>
                    <img className="w-12 h-12 rounded-full" src={preview} alt="Botchat" />
                    <h1 className="text-3xl">Chat Individual</h1>
                </div>
                <div>
                    <button className='' onClick={() => setOpen(!open)}>
                        <img className='w-12 h-12' src="./chat.png" alt="" />
                    </button>
                    
                </div>
            </div>

            {/* Impunt */}
            <div className="relative w-[600px] mx-auto mb-8">
                <input type="text" className="w-full p-2 pr-10 border border-[#3EB489] rounded-xl focus:outline-none" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img src="./Enviar.png" alt="Enviar" className="w-6 h-6" />
                </button>
            </div>
        </section>
    )
}

export default Chat 