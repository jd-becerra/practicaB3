import { Team_Icons_Data } from "../data/Team_Icons_data"

function NavBar() {
    return (
    <div>
        <div className='grid grid-cols-8 bg-white'>
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
                <div className="inline-flex items-center border-4 dark:border-gray-300 shadow-sm bg-white">
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
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">Fútbol</span>
            </div>
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">Motor</span>
            </div>
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">Boxeo</span>
            </div>
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">NFL</span>
            </div>
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">Otros deportes</span>
            </div>
            <div className="flex items-center justify-center font-bold">
                <span className="text-white">Más+</span>
            </div>

            <div className="col-span-2 flex items-center justify-center bg-red-600">
                <form class="max-w-md mx-auto" className="mt-2 mb-2">   
                    <label for="default-search" class="text-sm font-medium text-black sr-only dark:text-black">Search</label>
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 text-sm text-black border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none border dark:border-gray-600 ps-4 pe-4">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg> 
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='relative bg-gray'>
                <ul className='inline-flex'>
                {Team_Icons_Data.map(
                      (image, index) =>    
                    <div className="px-4 pt-4 pb-4">
                      <img key={index} 
                      src={`../img/icons/equipos_deportes/small/${image}`} 
                      alt="info">
                      </img>
                    </div>
                )} 
                </ul>
        </div>
    </div>
    )
}

export { NavBar }