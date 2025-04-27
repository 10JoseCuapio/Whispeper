function Bot () {
    return(
        <div className="flex flex-col justify-between h-full relative">
            <div className="flex justify-center items-center bg-[#65C3A1] p-2 gap-2">
                <img className="w-12 h-12" src="./Bot.png" alt="Logo" />
                <h1 className="text-3xl" >BotChat</h1>
            </div>

            <div className="flex justify-center items-center p-6">
                <input className="w-80 md:w-96 h-9 border border-[#3EB489] rounded-xl focus:outline-none p-2" placeholder="Empiza a conversar..." type="text"/>
                <button className=" absolute z-10 ml-[280px] md:ml-[335px]">
                    <img className="w-8 h-8" src="./Enviar.png" alt="Enviar" />
                </button>
            </div>
        </div>
    )
}

export default Bot 