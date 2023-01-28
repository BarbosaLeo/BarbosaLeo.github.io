import './App.css';
import ImageCollection from './ImageCollection';
import Section from './Section';
import React, { useEffect, useState } from 'react';
import { Collapse } from 'bootstrap';

var path = process.env.PUBLIC_URL;
var file = "/img/";

const renderImageData = [
  {
    imageURL: path + file + "extinguisher_render.png",
    alt: "Um extintor low-poly",
  },

  {
    imageURL: path + file + "f15_render.png",
    alt: "Um render",
  },

  {
    imageURL: path + file + "Jet_render.png",
    alt: "Um render",
  },

  {
    imageURL: path + file + "f5-tiger_render.png",
    alt: "Um render",
  },

]


function CollapseDemo() {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
      var myCollapse = document.getElementById('collapseTarget')
      var bsCollapse = new Collapse(myCollapse, {toggle: false})
      toggle ? bsCollapse.show() : bsCollapse.hide()
  })

  return (
    <div className='Main'>
        <button className="btn" onClick={()=> setToggle(toggle => !toggle)}>
          Ver meus projetos
        </button>

        <div className='collapse' id="collapseTarget">
          <Section
              title="Um titulo bom"
              subtitle="Subtitulo incrível"
            >

            {
              renderImageData.map(function(item){
                return(
                  <ImageCollection
                    imageURL={item.imageURL}
                    alt={item.alt}
                  />
                );
              })
            }

          </Section>
        </div>
    </div>
  )
}


function App() {

  const [mounted, setMounted] = useState(true);

  return (
    <div className="App">
      <main className="App-header">

        <div className='Profile-picture'/>
        <p>
          Olá, seja bem vindo.
        </p>
        {/* <Button btnContent="Ver meus Projetos"/> */}

        {
          mounted &&
          <div>
            <CollapseDemo/>
          </div>
          
        }
      </main>
    </div>
  );
}

export default App;