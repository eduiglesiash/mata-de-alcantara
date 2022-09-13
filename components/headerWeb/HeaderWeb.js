import Link from 'next/link';

export default function HeaderWeb() {
  return (
    <header>
      <nav className='navigation'>
        <Link href="/">
          <a className='logo'>
            <picture className="logo__shield">
              <img  src={'/assets/img/mata-de-alcantara-escudo.png'} alt="Escudo de Mata de Alcántara" />
            </picture>
            Mata de Alcántara
          </a>
        </Link>
        {/* <ul className='flex flex-row items-center gap-x-6 px-2'>
          <li><Link href="/erase-una-vez"><a className="mm__link">Erase una vez</a></Link></li>
        </ul> */}
      </nav>
    </header >
  )
}
