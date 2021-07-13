import Link from 'next/link'

export default function Spotlight(props) {
    return (
        <article>
            <span className="image">
                <img src={props.img} alt={`${props.title}的照片`}/>
            </span>
            <header className="major">
                <h3><Link href={props.link} className="link">{props.title}</Link></h3>
                <p>{props.context}</p>
            </header>
        </article>
    )
}