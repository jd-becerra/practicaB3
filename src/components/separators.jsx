import { separator_1_data } from '../data/separators_data.jsx'

function Separator1() {
  return (
    <div className='container mx-auto inline-flex border-y-4 border-y-gray-200 py-8 my-16 overflow-hidden'>
      <div className='flex items-center whitespace-nowrap ease-out animate-autoscroll-x'>
        <span className="text-xl text-gray-600 font-bold">Es noticia:</span>
        <ul className='inline-flex'>
          {separator_1_data.map((item, index) => (
            <li key={index}>
             {(index !== separator_1_data.length - 1) ? (
                  <span className='text-gray-600 text-xl border-r-4 px-4 border-r-gray-200'>
                    {item}
                  </span>
                ) : (
                  <span className='text-gray-600 text-xl px-4'>
                    {item}
                  </span>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Separator1 }
