import { Social_Media_Data } from "../data/social_media_data"

function SocialMedia() {
    return ( 
    <div className='grid-rows-2 relative bg-gray-100 shadow-xl'>
        <div className='row-span-1 flex justify-center items-center'>
            <h2 className="text-lg font-semibold">¡Síguenos!</h2>
        </div>
    <div className="row-span-1">
        <div className="xl:block lg:block md:block sm:block xs:hidden">
            <ul className='inline-flex'>
                {Social_Media_Data.map(
                        (image, index) => 
                    <div className="py-4 2xl:px-1 xl:px-4 lg:px-4 md:px-4 h-16 w-16 flex flex-shrink cursor-pointer" key={index}>
                        <img key={index} 
                        src={`../img/icons/${image}`} 
                        alt="info">
                        </img>
                    </div>
                )} 
                </ul>
            </div>
        </div>

        <div className="xl:hidden lg:hidden md:hidden sm:hidden xs:block">
            <ul className='inline-flex'>
                {Social_Media_Data.map(
                        (image, index) => 
                    <div className="py-2 px-2 h-12 w-12 flex flex-shrink cursor-pointer" key={index}>
                        <img key={index} 
                        src={`../img/icons/${image}`} 
                        alt="info">
                        </img>
                    </div>
                )} 
            </ul>
        </div>
    </div>
    )
}

export { SocialMedia }