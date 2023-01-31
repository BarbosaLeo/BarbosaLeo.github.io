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
        <div className="App-header-div">

          <div className='Profile-picture'/>

          <Button
            className="Dark-mode-btn"
            btnContent={
              <svg className='Svg-footer' width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="none"/>
                <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"/>
                <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"/>
              </svg>
            }
          />
        </div>
        <h1>
          Olá, seja bem vindo ao meu Portfolio! (:
        </h1>
        
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
            
            Com esse problema na minha cabeça eu desenvolvi um site totalmente do zero com somente HTML, CSS e Javascript, 
            e você pode encontrar o código deste antigo site 
            <strong><a href='https://github.com/BarbosaLeo/Pagina-antiga-Old-page' target="_blank" rel='noopener noreferrer'> aqui</a></strong>.<br/>

            Mas ainda não estava bom. O site era péssimo e a página um terror para carregar hahaha, 
            e foi aí que depois de quase um ano fui aprensentado ao React. E lá fui eu aprender React… Bem, o resultado do estudo é esta página (:
          </p>
        </Section>
        

      </main>
      <footer className='App-footer'>

        <Section
          title="Minhas Redes"
          subtitle=""
        >
          <a
            href='https://github.com/BarbosaLeo'
            target="_blank"
            rel='noopener noreferrer'
          >
            <svg className='Svg-footer' fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path>
            </svg>
            
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-nascimento-barbosa-3b4555167/'
            target="_blank"
            rel='noopener noreferrer'
          >
            <svg className="Svg-footer" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M17.0391667,17.0433333 L14.0775,17.0433333 L14.0775,12.4025 C14.0775,11.2958333 14.055,9.87166667 12.5341667,9.87166667 C10.99,9.87166667 10.7541667,11.0758333 10.7541667,12.3208333 L10.7541667,17.0433333 L7.7925,17.0433333 L7.7925,7.5 L10.6375,7.5 L10.6375,8.80083333 L10.6758333,8.80083333 C11.0733333,8.05083333 12.04,7.25916667 13.4841667,7.25916667 C16.485,7.25916667 17.04,9.23416667 17.04,11.805 L17.04,17.0433333 L17.0391667,17.0433333 Z M4.4475,6.19416667 C3.49416667,6.19416667 2.72833333,5.4225 2.72833333,4.47333333 C2.72833333,3.525 3.495,2.75416667 4.4475,2.75416667 C5.3975,2.75416667 6.1675,3.525 6.1675,4.47333333 C6.1675,5.4225 5.39666667,6.19416667 4.4475,6.19416667 Z M5.9325,17.0433333 L2.9625,17.0433333 L2.9625,7.5 L5.9325,7.5 L5.9325,17.0433333 Z M18.5208333,0 L1.47583333,0 C0.66,0 0,0.645 0,1.44083333 L0,18.5591667 C0,19.3558333 0.66,20 1.47583333,20 L18.5183333,20 C19.3333333,20 20,19.3558333 20,18.5591667 L20,1.44083333 C20,0.645 19.3333333,0 18.5183333,0 L18.5208333,0 Z"/>
            </svg>
          </a>
        </Section>

        <div className='Note'>
          <p>
            Feito com dedicação por Leonardo do Nascimento Barbosa
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;