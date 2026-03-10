import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#00010D]">
      <menu className="flex flex-row gap-4 justify-between bg-[#1a1a1a]/80 backdrop-blur-md p-6 sticky top-0 z-50 transition-all border-b border-white/10 shrink-0">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-tighter uppercase px-4 cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95">Monster RPG</h1>
        
        <ul className='flex flex-row justify-between gap-8 items-center text-sm font-medium text-gray-400'>
          <li className="hover:text-white cursor-pointer transition-colors px-2 py-1 rounded-md hover:bg-white/5">Home</li>
          <li className="hover:text-white cursor-pointer transition-colors px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 shadow-sm">Sobre</li>
          <li className="hover:text-white cursor-pointer transition-colors px-2 py-1 rounded-md hover:bg-white/5">D&D 5E</li>
          <li className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-110 active:scale-95 shadow-lg">Login</li>
        </ul>
      </menu>

      <div className="flex-1 overflow-hidden">
        <Home />
      </div>
    </div>
  )
}

export default App
