import Link from "next/link";



export default function ProjectCard({ title, link, sourceIMG, alt }) {
  return (
    <Link href={link}>
      <a className="project-card">
        <article>
          <h2 className="project-card__title">{title}</h2>
          <picture>
            <img className="brightness-50" src={sourceIMG} alt={alt} />
          </picture>
        </article>
      </a>
    </Link>

  )
}
