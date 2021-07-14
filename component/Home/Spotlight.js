import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Spotlight(props) {
    return (
        <article onClick={()=>location.href=props.link} style={{cursor: "pointer"}}>
            <span className="image">
                <img src={props.img} alt={`${props.title}的照片`}/>
            </span>
            <header className="major">
                <h3><Link href={props.link} className={"link"}>{props.title}</Link><ArrowForwardIcon/></h3>
                <p>{props.context}</p>
            </header>
        </article>
    )
}