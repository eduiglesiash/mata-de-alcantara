import Head from 'next/head'
import Dehesa from '../components/dehesa/Dehesa'
import ProjectCard from '../components/projectCard/ProjectCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mata de Alcántara. Reserva de la Biosfera Tajo Internacional,</title>
        <meta name="description" content="Web del pueblo de Mata de Alcántara. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='relative mb-8'>
        <h1 className="jumbotron__title">
          Mata <br /> de Alcántara
          <span> Gente, naturaleza, Historia</span>
        </h1>
        <picture className='jumbotron'>
          <img className="jumbotron__img" src="/assets/img/mata-de-alcantara-panoramica.jpeg" alt="Atardecer en Mata de Alcántara" />
        </picture>
        <picture>
          <img className="jumbotron__shield" src="/assets/img/mata-de-alcantara-escudo.png" alt="Escudo de Mata de Alcántara" />
        </picture>
        <picture>
          <img className="jumbotron__logo" src="/assets/img/escudo-equinocio.png" alt="Escudo del equinocio de Mata de Alcántara" />
        </picture>
      </section>

      <section className="project">
        {/* <div className='project'>
          <ProjectCard
            title="Érase una vez"
            alt="Imagen del proyecto Erase una vez"
            link="/erase-una-vez"
            sourceIMG="/assets/img/erase-una-vez.jpg" />
        </div> */}
        <div className='project'>
          <ProjectCard
            title="Inscripciones Ruta Naharro 2024"
            alt="Concentración de motos en la plaza de Mata de Alcántara"
            link="https://forms.gle/aYMNGFSZyL47q6bs7"
            sourceIMG="/assets/img/concentracion-plaza-llano.jpg" />
          <div className="video-youtube">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/8zZypicDsA4?si=9bAQizP01cRFGtxd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <Dehesa />
    </>
  )
}
