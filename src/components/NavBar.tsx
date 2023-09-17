import React from 'react';

export const NavBar: React.FC = () => {
  return (
<nav className=' w-full h-full text-white flex flex-col font-bold mr-3'>
    <div className='text-center text-2xl mb-2'>V-FOODS</div>

    <div className="flex-grow"></div>

    <button className='flex items-center space-x-2 mb-2'>
        <img src="./src/assets/home.svg" alt="" className="h-6 w-6" />
        <div className="text-lg">Início</div>
    </button>

    <button className='flex items-center space-x-2'> 
        <img src="./src/assets/group.svg" alt="" className="h-6 w-6" />
        <div className="text-lg">Colaboradores</div>
    </button>

    <div className="flex-grow"></div>

    <button className='flex items-center space-x-2 mb-2'> 
        <img src="./src/assets/settings.svg" alt="" className="h-6 w-6" />
        <div className="text-lg">Configurações</div>
    </button>

    <button className='flex items-center space-x-2'>
        <img src="./src/assets/logout.svg" alt="" className="h-6 w-6" />
        <div className="text-lg">Sair</div>
    </button>
</nav>
  );
};
