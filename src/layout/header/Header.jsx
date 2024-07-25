import React, { useContext } from 'react'
import { ApplicationContext } from '../../context/ApplicationContextProvider';

function Header() {
  const { state: { basket } } = useContext(ApplicationContext);
  return (
    <header className='w-full flex justify-between p-4 gap-8 items-center border-b border-b-slate-300'>
      <h1 className='text-3xl text-blue-500 font-bold'>React formation</h1>
      <ul className='flex gap-4 flex-grow'>
        <li className='active'>Todo</li>
        <li>Wip</li>
        <li>Test</li>
        <li>Done</li>
      </ul>
      <h2>{basket.length}</h2>
    </header>
  )
}

export default Header