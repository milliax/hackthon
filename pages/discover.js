import Title from "../component/Title";
import Head from "next/head";
import {Component} from "react";
import GoogleMapReact from 'google-map-react'
import {useState} from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function Discover(){
    const [center,setCenter] = useState({lat: 23.5910882,lng: 121.112078})
    const [zoom,setZoom] = useState(7)
    return(
        <div id="wrapper">
            <Head>
                <script type="text/javascript" src={`http://www.google.com/jsapi?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`} />
            </Head>
            <Title title="探索"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>探索</h1>
                        </header>
                        <div style={{height: '100vh',width: '100%'}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}}
                                defaultCenter={center}
                                defaultZoom={zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="my Marker"
                                    />
                            </GoogleMapReact>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}