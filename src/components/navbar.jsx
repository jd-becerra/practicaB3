function NavBar() {
    return (
    <div>
        <div className='grid grid-cols-8'>
            <div className='bg-white justify-start items-start'>
                <img
                    className='drop-shadow-xl mx-auto'
                    src='../img/marca-logo-2.png'
                />
            </div> 

            <div className="grid grid-cols-3 col-start-3 col-span-4 whitespace-nowrap">
                <div className="grid grid-cols-3 container mx-auto flex bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-200 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-0.svg'
                        alt='Radio Marca Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Radio MARCA</span>
                </div>

                <div className="grid grid-cols-3 container mx-auto flex bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-2000 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-3.svg'
                        alt='CuidatePlus Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Cuidate Plus</span>
                </div>

                <div className="grid grid-cols-3 container mx-auto flex bg-white items-center ml-2 transform scale-75 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-4.svg'
                        alt='Lo + trending Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Lo + trending</span>
                </div>
            </div>

            <div className="grid grid-cols-2 col-start-8">
                <div className="inline-flex items-center px-1 border-4 border-gray-250 shadow-sm bg-white">
                    <img
                        src="../img/icons/svg-5.svg"  
                        alt="Mexico Flag"
                        className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm font-medium text-gray-800">MX</span>
                    <img
                        src='../img/icons/svg-21.svg'
                        alt='Flechita'
                        className="ml-1"
                    />
                </div>

                <div className="container mx-auto flex bg-white transform scale-50">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/user-icon.png'
                        alt='Radio Marca Icon'
                    />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-8 bg-red-600 flex items-center justify-center">
            <ul className="inline-flex space-x-4 text-white text-sm font-bold whitespace-nowrap">
                <li>Fútbol</li>
                <li>Motor</li>
                <li>Boxeo</li>
                <li>NFL</li>
                <li>Otros deportes</li>
                <li>Más+</li>
            </ul>

            
        </div>

    </div>
    )
}

export { NavBar }