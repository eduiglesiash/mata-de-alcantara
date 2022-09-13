

const PHOTOS_DEHESA = [
  '1-la-dehesa.jpg',
  '2-la-dehesa.jpg',
  '3-la-dehesa.jpg',
  '4-la-dehesa.jpg',
  '5-la-dehesa.jpg',
  '6-la-dehesa.jpg',
  '7-la-dehesa.jpg',
  '8-la-dehesa.jpg',
  '9-la-dehesa.jpg',
  '10-la-dehesa.jpg',
  '11-la-dehesa.jpg',
]

export default function Dehesa() {
  return (
    <section className="dehesa">
      <h2 className="dehesa__title">La Dehesa Matiega <br/> <small className="dehesa__text">Reserva de la Biosfera Tajo Internacional</small></h2>
      <picture className="dehesa__pic">
        <img className="brightness-75 dehesa__img" src="/assets/img/la-dehesa-matiega.jpeg" alt="La dehesa Matiega" />
        
      </picture>
      <ul className="dehesa__list">
        {
          PHOTOS_DEHESA.map(photo => (
            <li key={photo}>
              <picture>
                <img src={"/assets/img/dehesa/"+photo} alt="Imagen de la dehesa extremeña de Mata de Alcántara" />
              </picture>
            </li>
          ))
        }

      </ul>
    </section>
  )
}
