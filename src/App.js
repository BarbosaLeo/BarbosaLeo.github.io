import './App.css';
import ImageCollection from './ImageCollection';
import Section from './Section';
import Button from './Button';
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


function CollapseContentButton() {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
      var myCollapse = document.getElementById('collapseTarget')
      var bsCollapse = new Collapse(myCollapse, {toggle: false})
      toggle ? bsCollapse.show() : bsCollapse.hide()
  })

  return (
    <div className='Button'>
        <Button 
          className="btn" 
          btnContent={
            toggle? "Ocultar projetos" : "Ver meus Projetos" 
          } 
          onClick={() => setToggle(toggle => !toggle)}/>
    </div>
  )
}


function App() {

  const [mounted] = useState(true);

  return (
    <div className="App">
      <header className="App-header" >

        <div className='Profile-picture'/>
        <p>
          Olá, seja bem vindo.
        </p>
        {
          mounted &&
          <div>
            <CollapseContentButton/>
          </div>
            
        }
      </header>
      <main className='collapse' id='collapseTarget'>
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
      </main>
    </div>
  );
}

export default App;