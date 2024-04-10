import { useState } from 'react'
import Screem from './componets/Screem';
import './App.css'



 function App() {
  
const [currentScreem , setCurrentScreem] = useState(0);

const screens = [
  {
    title: 'Pantalla 1',
    description: 'Descripción de la pantalla 1',
    content: <div>Contenido de la pantalla 1</div>,
  },
  {
    title: 'Pantalla 2',
    description: 'Descripción de la pantalla 2',
    content: <div>Contenido de la pantalla 2</div>,
  },

  {
    title: 'Pantalla 3',
    description: 'Descripción de la pantalla 2',
    content: <div>Contenido de la pantalla 2</div>,
  },

  {
    title: 'Pantalla 4',
    description: 'Descripción de la pantalla 2',
    content: <div>Contenido de la pantalla 2</div>,
  },

  {
    title: 'Pantalla 5',
    description: 'Descripción de la pantalla 2',
    content: <div>Contenido de la pantalla 2</div>,
  },
  // Agregar más pantallas según sea necesario
];

const nextScreen = () =>{
  setCurrentScreem(currentScreem + 1);
}

const prevScreen = () =>{
  setCurrentScreem(currentScreem -1);
}


  return (
   <div>
    <h1 className="text-center text-3xl"> Hola React</h1>
    <div>
      {/* Renderizar la pantalla actual */}
      <Screem
        title={screens[currentScreem].title}
        description={screens[currentScreem].description}
        content={screens[currentScreem].content}
      />
      {/* Botón "Siguiente" */}
      {currentScreem < screens.length - 1 && (
        <button className="bg-cryan-300 p-2 rounded-md" onClick={nextScreen}>Siguiente</button>
      )}
      {/* Botón "Anterior" */}
      {currentScreem > 0 && (
        <button className="bg-cryan-300 p-2 rounded-md" onClick={prevScreen}>Anterior</button>
      )}
    </div>
   </div>
  )
}

export default App
