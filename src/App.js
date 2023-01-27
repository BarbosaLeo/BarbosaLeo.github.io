import './App.css';
import Button from './Button';
import ImageCollection from './ImageCollection';
import Section from './Section';
import React from 'react';


const renderImageData = [
  {
    ImageURL: "./public/img/extinguisher_render.png",
    alt: "Um extintor low-poly",
  },

  {
    ImageURL: "../public/img/f15_render.png",
    alt: "Um render",
  },

  {
    ImageURL: "../public/img/Jet_render.png",
    alt: "Um render",
  },

  {
    ImageURL: "../public/img/f5-tiger_render.png",
    alt: "Um render",
  },

]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Profile-picture'/>
        <p>
          Olá, seja bem vindo.
        </p>
        <Button btnContent="Ver meus Projetos" />
      </header>
      <main>
        <Section 
          className="images" 
          title="Um titulo bom" 
          subtitle="Subtitulo incrível"
        >

        {
          renderImageData.map(function(item){
            return(
              <ImageCollection
                ImageURL={item.ImageURL}
                alt={item.alt}
              />
            );
          })
        }

        </Section>
      </main>
    </div>
  );
}

export default App;