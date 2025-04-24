import { Link, useNavigate } from 'react-router-dom'

function Welcome() {

  return (
    // Contenedor de contenido principal
    <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center gap-16 h-screen">
            <div className="flex flex-col items-center justify-center gap-16 sm:flex-row">
                <div>
                    <img src="./jr.png" alt="Logo" />
                </div>
                <div>
                    <h1 className="text-3xl text-center"> Bienvenido a </h1>
                    <h1 className="text-6xl"> Whisperer </h1>
                </div>
            </div>

            <div className="Items-center justify-center">
                    <Link to="/Login" className='flex items-center justify-center w-64 h-12 bg-[#3EB489] rounded-lg hover:bg-[#2F9C7C]' >
                        Continuar
                    </Link>
            </div>
        </div>

        {/* Informacion general sobre el proyecto */}
        <div className='flex flex-col items-center justify-center gap-16 sm:flex-row mb-28'>
            <div className='flex flex-col items-center justify-center md:gap-10 sm:flex-row'>
                <img src="./200x200.png" alt="" />
                <div className='p-14 sm:p-0'>
                    <p className='text-2xl'>¿Quien es Whispeper?</p>
                    <br />
                    <p> 
                        Whispeper es un ChatBot interactivo diseñado para <br />
                        aprender de las conversaciones de los usuarios, <br />
                        mejorando sus respuestas con el tiempo. <br />

                        <br />

                        A medida que conversas, resgistra nuevas expresiones <br />
                        adaptando su lenguaje para ofrecer respuestas cada <br />
                        vez más personalizadas y naturales.
                    </p>

                        <br />

                    <h1>Whisper no solo responde, aprende de ti.</h1>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-10 sm:flex-row'>
                <img src="./Logo.png" alt="" />
                <div>
                    <p className='text-2xl'>¿Quienes somos?</p>
                    <br />
                    <p>
                        Solo soy un chico lleno de ilusiones, que <br />
                        desea llegar lejos en este mundo de la <br />
                        informática y super fan de los gatos. :) 
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Welcome
