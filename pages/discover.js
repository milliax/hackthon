import Title from "../component/Title";
import GoogleMap from 'google-map-react'
import {useState, useEffect} from "react";
import EditLocationIcon from '@material-ui/icons/EditLocation';
import Swal from 'sweetalert2'
import {Card} from 'react-bootstrap'

export default function Discover() {
    const [center,setCenter] = useState({lat: 23.5910882, lng: 121.112078})
    const [zoom,setZoom] = useState(7)
    const [coordinate, setCoordinate] = useState([])
    async function getFile() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/posts`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const response = await res.json()
            console.log(response)
            setCoordinate(response)
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
            })
        }
    }

    function handleOnclick(index){
        const arrival = coordinate[index]
        setZoom(9)
        setCenter({lat: arrival.lat,lng: arrival.lng})
    }

    useEffect(() => {
        getFile()
    }, [])

    return (
        <div id="wrapper">

            <Title title="探索"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>探索</h1>
                        </header>
                        <div style={{display: 'flex', flexWrap: 'wrap', align: 'center'}}>
                            <div style={{height: '100vh', width: '50%'}}>
                                <GoogleMap
                                    key={process.env.NEXT_PUBLIC_GOOGLE}
                                    center={center}
                                    zoom={zoom}
                                >
                                    {typeof(coordinate)!=="undefined" && coordinate.map((item, index) => {
                                        return (
                                            <div lat={item.lat}
                                                 lng={item.lng}>
                                                <EditLocationIcon>Location</EditLocationIcon>
                                            </div>
                                        )
                                    })}
                                </GoogleMap>
                            </div>
                            <div style={{height: '100vh', width: '5%'}} />
                            <div style={{height: '100vh', width: '45%',overflowY: "scroll"}}>
                                {typeof(coordinate)!=="undefined" && coordinate.map((item,index) => {
                                    return (
                                        <Card>
                                            <Card.Header style={{color: 'black',display: 'flex'}}>
                                                <div>{item.name}</div>
                                                <div style={{marginLeft:"auto"}} >
                                                    <button className="btn btn-warning"
                                                            style={{width: "4em",height: "2em"}}
                                                            onClick={()=>{handleOnclick(index)}}>
                                                        查看
                                                    </button>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title style={{color: 'black'}} hidden={typeof(item.categories) === "undefined"} >{item.categories}</Card.Title>
                                                <Card.Text style={{color: 'black'}}>
                                                    {item.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}