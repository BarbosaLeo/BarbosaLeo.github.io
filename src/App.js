import './App.css';
import ImageCollection from './ImageCollection';
import Section from './Section';
import Button from './Button';
import React, { useEffect, useState } from 'react';
import github from './github.svg';
import linkedin from './linkedin.svg';
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

const gameImageData = [
  {
    imageURL: path + file + "camera_test_pos.gif",
    alt: "render"
  },

  {
    imageURL: path + file + "dash_working.gif",
    alt: "render"
  },

  {
    imageURL: path + file + "hangar_customize.gif",
    alt: "render"
  },

  // {
  //   imageURL: path + file + "",
  //   alt: "render"
  // }
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
          className={toggle? "trueBtn" : "falseBtn"} 
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
      <header className="App-header">

        <div className='Profile-picture'/>
        <p>
          Olá, seja bem vindo.
        </p>
        {
          mounted &&
            <CollapseContentButton/>
            
        }
      </header>
      <main className='collapse' id='collapseTarget'>
        <Section
          title="Meus projetos de jogos"
          subtitle="Produzidos na Unity3D."
        >
          {
            gameImageData.map(function(item){
              return(
                <ImageCollection
                  imageURL={item.imageURL}
                  alt={item.alt}
                />
              );
            })
          }

        </Section>

        <Section
            title="Meus Renders"
            subtitle="Estudo de como produzir modelos 3D para aplicar em jogos."
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

        <Section
          title="Sobre esta página"
          subtitle=""
        >
          <p className='Paragraph'>

            Esta página foi desenvolvida com o intuito de resolver um problema. Como apresentar  meus projetos de uma forma bem bacana? <br/>
            
            Com esse problema na minha cabeça eu desenvolvi um site totalmente do zero com somente HTML, CSS e Javascript, e você pode encontrar o código deste antigo site <strong>aqui</strong>.<br/>

            Mas ainda não estava bom. O site tinha uma péssima diagramação e eu ainda estava aprendendo como fazer paginação, e foi aí que depois de quase um ano que um colega meu me apresentou o React. E lá fui eu aprender React… Bem, o resultado é esse aqui. (:


          </p>
        </Section>

      </main>
      <footer className='Foot'>
        <Section
          title="Minhas redes"
          subtitle=""
        >
          <a
            href='https://github.com/BarbosaLeo'
            target="_blank"
            rel='noopener noreferrer'
          >
            <img 
              className='Socials-image'
              src={github}
              alt='A Github icon that contains a link to go to my Github profile page'
              height="50px"
            />
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-nascimento-barbosa-3b4555167/'
            target="_blank"
            rel='noopener noreferrer'
          >
            <img 
              className='Socials-image'
              src={linkedin}
              alt='A Github icon that contains a link to go to my Github profile page'
              height="50px"
            />
          </a>
        </Section>
      </footer>
    </div>
  );
}

export default App;