import Title from "../component/Title";
import Head from "next/head";
import GoogleMap from 'google-map-react'
import {useState} from "react";
import EditLocationIcon from '@material-ui/icons/EditLocation';

export default function Discover() {
    const [center, setCenter] = useState({lat: 23.5910882, lng: 121.112078})
    const [zoom, setZoom] = useState(7)
    const [longitude,setLongitude] = useState(121)
    const [latitude,setLatitude] = useState(23)

    function clicked({x, y, lat, lng, event}) {
        console.log(`x: ${x}y: ${y}lat: ${lat}lng: ${lng}event: ${event}`)
        setLatitude(lat)
        setLongitude(lng)
    }

    return (
        <div id="wrapper">

            <Title title="探索"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>探索</h1>
                        </header>
                        <div style={{height: '100vh', width: '100%'}}>
                            <GoogleMap
                                key={process.env.NEXT_PUBLIC_GOOGLE}
                                center={center}
                                zoom={zoom}
                                onClick={clicked}
                            >
                                <div lat={latitude}
                                     lng={longitude}>
                                    <EditLocationIcon>Location</EditLocationIcon>
                                </div>
                            </GoogleMap>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}