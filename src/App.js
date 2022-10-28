import { useState } from 'react';
import './index.css'
import 'primeicons/primeicons.css';
import { MemoPresentacion } from './components/Presentacion';
//import confetti from 'https://cdn.skypack.dev/canvas-confetti';


function App() {

  const [changeState, setChangeState] = useState(1)

  const Next = () => {
    setChangeState(changeState => changeState + 1)
    if (changeState > 2) { setChangeState(1) }
  }

  const Prev = () => {
    setChangeState(changeState => changeState - 1)
    if (changeState < 2) { setChangeState(3) }
  }

  /* funcion para agg confeti en nuestra web
  confetti();
*/

  /*comparar un valor con varios usando el método .includes
  const CompararValores = () => {
    let valor = 5 //valor a comparar 
    let a = 0 // valores de referencia (b , c, d...)
    if ([a, "b", "c", "d"].includes(valor)) { console.log("resultado") }
  }*/

  /* Para evitar usar useEffect al cambiar un id de un componente se recomienda usar una key unica en el componente, eje:
  <User key={id}/> al actualizar key nos aseguramos que al cambiar este el componente se actualice solo  
  */


  return (
    <>
      <div><h1>José Nelson Amaris Ortiz</h1></div>
      <div className='menuPrincipal'>
        <div className='item' onClick={e => setChangeState(1)}>¿Quién soy?</div>
        <div className='item' onClick={e => setChangeState(2)}>Estudios</div>
        <div className='item' onClick={e => setChangeState(3)}>Experiencia y habilidades</div>
      </div>
      <div className='containerFlex'>
        <MemoPresentacion />
        <div className='menuSecundario'>
          <div className='item' onClick={e => setChangeState(1)}>¿Quién soy?</div>
          <div className='item' onClick={e => setChangeState(2)}>Estudios</div>
          <div className='item' onClick={e => setChangeState(3)}>Experiencia y habilidades</div>
        </div>
        <div className='container'>
          {changeState === 1 ?
            <div className='animar'>
              <h2>¿Quién soy?</h2>
              <p>
                Nacido en Bucaramanga en 1981, criado, educado y rodeado de familiares y personas que me han servido de ejemplos
                a seguir y con el valioso apoyo siempre de mi madre, quien ha estado ahí de manera incondicional y que me inculco los
                valores del respeto, la honestidad y la responsabilidad.<br />
                En la juventud abandoné mis estudios tecnológicos por dedicarme a laborar, cosa que mucho más adelante corregí (a mis 35 años)
                retomando o más bien reiniciando la vida académica gracias al esfuerzo, dedicación y apoyo de mi madre y a la fortuna de poder
                ingresar a tan prestigiosa y de la cual me siento muy orgulloso, mi alma mater Universidad Industrial de Santander UIS, alcanzando 
                así una meta más en la vida, que es la de ser un Ingeniero de Sistemas (2022). <br />
                Por un largo periodo de tiempo me desempeñé como técnico, área en la cual aprendí bastante y me fue muy útil la interacción
                diaria con la gran cantidad de usuarios con los cuales trate.<br />
                Respeto mucho la naturaleza y siento gran afinidad por los animales domésticos.<br />
                Me considero curioso y autodidacta, también empático y paciente.

              </p>
            </div> : null}
          {changeState === 2 ?
            <div className='animar'>
              <h2>Estudios</h2>
              <ul>
                <li>Graduado de primaria en 1992.</li>
                <li>Bachiller en la modalidad académico humanidades en 1998.</li>
                <li>Tecnólogo en electrónica (4 semestres) no culminado.</li>
                <li>Técnico en electrónica graduado en 2005.</li>
                <li>Ingeniero de Sistemas 2022.</li>
              </ul>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div> : null}
          {changeState === 3 ?
            <div className='animar'>
              <h2>Experiencia y habilidades</h2>
              <p>Mi trayectoria laboral ha sido de la siguiente manera:</p>
              <ul>
                <li>Mi primer trabajo fue Botones en turno dominical.</li>
                <li>Ayudante de venta en punto de pizza.</li>
                <li>Todero y reemplazo en vacaciones en el área hotelera.</li>
                <li>Técnico en instalación y mantenimiento redes domiciliarias HFC.</li>
                <li>Técnico en mantenimiento en redes domiciliarias de cobre.</li>
                <li>Técnico en manteniendo en redes externas HFC.</li>
                <li>Técnico en instalación y mantenimiento en sistema de tv satelital.</li>
                <li>Desarrollo Frontend usando Reactjs (como proyecto de grado).</li>
              </ul>
              <p>Dentro de mis fortalezas cabe destacar el constante aprendizaje de manera autodidacta, la consulta e
                indagación de temas que considero relevantes y que en algún momento puedan ser útiles.
              </p>
            </div> : null}
          <div onClick={Prev} className='flechaAtras'>
            <i className="pi pi-chevron-left"></i>
          </div>
          <div onClick={Next} className='flechaAdelante'>
            <i className="pi pi-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className='socialMedia'>
        <div className='socialmedia'>
          <a href='https://walink.co/f6015f' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-whatsapp icons" />
          </a>
          <a href='https://www.linkedin.com/in/jos%C3%A9-nelson-amaris-ortiz-037166202/' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-linkedin icons" />
          </a>
          <a href='https://github.com/amigonelson1' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-github icons" />
          </a>
          <a href='https://www.facebook.com/jose.nelson.9047/' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-facebook icons" />
          </a>
          <a href='https://www.instagram.com/invites/contact/?i=1qx0tzam84mim&utm_content=3m2xau3' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-instagram icons" />
          </a>
          <a href='mailto:amigonelson1@hotmail.com?Subject=Ví%20tu%20web%20personal,%20deseo%20contactarte' target="_blank" rel="noopener noreferrer">
            <i className="pi pi-envelope icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
