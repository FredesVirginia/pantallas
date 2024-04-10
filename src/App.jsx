import { useState } from 'react'
import Screem from './componets/Screem';
import './App.css'


function App() {

  const [currentScreem, setCurrentScreem] = useState(0);

  const screens = [
    {
      title: 'Pantalla 1',
      description: 'Descripción de la pantalla 1',
      content: <div>Contenido de la pantalla 1</div>,
      color : ''
    },
    {
      title: 'Pantalla 2',
      description: 'Descripción de la pantalla 2',
      content: <div>Contenido de la pantalla 2</div>,
        color : ''
    },

    {
      title: 'Pantalla 3',
      description: 'Descripción de la pantalla 2',
      content: <div>Contenido de la pantalla 2</div>,
      color : ''
    },

    {
      title: 'Pantalla 4',
      description: 'Descripción de la pantalla 2',
      content: <div>Contenido de la pantalla 2</div>,
      color : ''
    },

    {
      title: 'Pantalla 5',
      description: 'Descripción de la pantalla 2',
      content: <div>Contenido de la pantalla 2</div>,
      color : ''
    },
    // Agregar más pantallas según sea necesario
  ];

  const nextScreen = () => {
    setCurrentScreem(currentScreem + 1);
  }

  const prevScreen = () => {
    setCurrentScreem(currentScreem - 1);
  }


  return (
    <div>
     
      <div className="fondo  ">

        <Screem
          title={screens[currentScreem].title}
          description={screens[currentScreem].description}
          content={screens[currentScreem].content}
          color={"bg-blue-300"}
          className=" borde  rounded-full "
          
        />

        {/* Botón "Anterior" */}
        <div className="flex justify-center items-center space-x-3 " style={{ position: 'absolute', top: '500px', left: 0, width: '100%' }}>
          {currentScreem > 0 && (
            <button className="bg-purple-700  rounded-full px-20  py-3 font-bold text-white" onClick={prevScreen}>Save</button>
          )}
          {/* Botón "Siguiente" */}
          {currentScreem < screens.length - 1 && (
            <button className="bg-purple-700 rounded-full px-20  py-3 font-bold text-white" onClick={nextScreen}>Next</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
