import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="https://www.unavidaenelpueblo.es">
        <a className="footer__text">Un proyecto de "Una vida en el pueblo"</a>
      </Link>
      <Link href="https://www.welly.es">
        <a className="footer__text">Un desarrollo de Welly Code SL</a>
      </Link>
    </footer>
  )
}
