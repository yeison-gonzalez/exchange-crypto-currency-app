import React from 'react'
import { ITicker } from '.'

/**
 * Inteface props for card exchange component
 * @constructor
 * @param {string} name - Name input
 */
interface IInputExchangeProps {
  name: string
  options: ITicker[]
}

export const InputExchange: React.FC<IInputExchangeProps> = ({ name, options }) => {
  return (
    <div className='w-full py-2'>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <input name={name} className='p-2.5 w-full z-20 text-sm text-gray-900 rounded-s-2xl border dark:bg-zinc-700 dark:border-l-zinc-700  dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white' value='' />
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-2xl hover:rounded-e-2xl active:border-transparent border-l-gray-100 dark:border-l-zinc-700 border-l-2 focus block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white">
            {options?.map(option => (
              <option key={option.id} value={option.id} selected>{option.symbol}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
