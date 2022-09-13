import Head from 'next/head'
import Link from 'next/link';
import PhotoAlbumLaMata from '../components/photoAlbum/photoAlbum';

export default function EraseUnaVez() {
  return (
    <>
      <Head>
        <title>Mata de Alcántara | Proyecto de Erase una vez</title>
        <meta name="description" content="Proyecto dedicado a la recuperación de imágenes de los habitantes del pueblo de Mata de Alcántara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='erase-una-vez'>
        <h1 id="initial_page" className="erase-una-vez__title"> Érase una vez</h1>


        <hr className='mb-8 mt-8' />

        <PhotoAlbumLaMata />

        <hr className='mb-8 mt-8' />

        <section className="mb-16">
          <h3 className="erase-una-vez__faqs">¿Quieres colaborar con el proyecto?</h3>
          <p>Si vives en el pueblo o vienes de vez en cuando, puedes acércanos las fotos en papel y nosotros nos encargamos de todo. Somo s Edu y Patricia.</p>
          <p>Si no vienes al pueblo pero quieres que colaborar con el proyecto, nos puedes enviar las fotos a <strong>eraseunavez@matadealcantara.com</strong></p>
        </section>
        <section className="mb-8">
          <h3 className="erase-una-vez__faqs">¿Cómo necesitamos las fotos?</h3>
          <ul className="erase-una-vez__list">
            <li>Las imágenes tienen que estar escaneadas con la mayor calidad posible. Si no, nos será difícil trabajar con ellas</li>
            <li>Una vez que nos las envíes, trabajaremos las fotos para restaurarlas</li>
            <li>Terminado el proceso de restauración, te reenviaremos las fotos restauradas para que las tengas</li>
            <li>Por último las incluiremos en el proyecto de exposición permanente que hay en la Casa de Cultura de Mata de Alcántara, para que todos los vecinos puedan ver las fotos y las incluiremos en le proyecto web de esta página web</li>
          </ul>
        </section>
      </section>
    </>
  )
}
