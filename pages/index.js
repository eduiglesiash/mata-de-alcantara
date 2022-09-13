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
      </section>

      <section className="project">
        <div className='project'>
          <ProjectCard
            title="Érase una vez"
            alt="Imagen del proyecto Erase una vez"
            link="/erase-una-vez"
            sourceIMG="/assets/img/erase-una-vez.jpg" />
        </div>
      </section>

      <Dehesa/>
    </>
  )
}
