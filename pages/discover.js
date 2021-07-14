import Title from "../component/Title";
import GoogleMap from 'google-map-react'
import {useState, useEffect} from "react";
import EditLocationIcon from '@material-ui/icons/EditLocation';
import Swal from 'sweetalert2'
import {Card,Button} from 'react-bootstrap'
import {Grid} from "@material-ui/core";
import styles from '../styles/customized.module.scss';
import Cookies from "universal-cookie";

export default function Discover() {
    const [center,setCenter] = useState({lat: 23.5910882, lng: 121.112078})
    const [zoom,setZoom] = useState(7)
    const [coordinate, setCoordinate] = useState([])
    const cookies = new Cookies()

    function handleGeoClick() {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
            enableHighAccuracy: true
        });
    }

    function geoSuccess(pos) {
        cookies.set('lat', pos.coords.latitude)
        cookies.set('lng', pos.coords.longitude)
        getFile(pos.coords.latitude, pos.coords.longitude)
    }

    function geoError(err) {
        alert(`位置錯誤${err.message}`)
    }

    async function getFile(lat,lng) {
        try {
            let params = ''
            if(typeof lat !== 'undefined' && typeof lng !== 'undefined'){
                params = `?lat=${lat}&lng=${lng}`
            } else if(typeof cookies.get('lat') !== 'undefined' && typeof cookies.get('lng') !== 'undefined'){
                params = `?lat=${cookies.get('lat')}&lng=${cookies.get('lng')}`
            }
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/posts${params}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const response = await res.json()
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
        setZoom(12)
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

                        <Grid container style={{height: '100vh'}} spacing={2}>
                            <Grid item xs={6}>
                                <GoogleMap
                                    key={process.env.NEXT_PUBLIC_GOOGLE}
                                    center={center}
                                    zoom={zoom}
                                >
                                    {typeof(coordinate)!=="undefined" && coordinate.map((item, index) => {
                                        return (
                                            <x-marker
                                                lat={item.lat}
                                                lng={item.lng}>
                                                <EditLocationIcon>Location</EditLocationIcon>
                                            </x-marker>
                                        )
                                    })}
                                </GoogleMap>
                            </Grid>
                            <Grid item xs={6} style={{overflowY: "scroll"}} spacing={2}>
                                <button className={styles.customizedBtnHover}
                                        style={{backgroundColor: "darkgrey", width:"100%", borderRadius: "5px"}}
                                        onClick={handleGeoClick}>
                                    查看我附近的志願服務
                                </button>
                                <hr/>
                                {typeof(coordinate)!=="undefined" && coordinate.map((item,index) => {
                                    return (
                                        <Card>
                                            <Card.Header style={{color: 'black',display: 'flex'}}>
                                                <div>{item.name}</div>
                                                <div style={{marginLeft:"auto"}} >
                                                    <button style={{backgroundColor: "darkgrey"}}
                                                            className={styles.customizedBtnHover}
                                                            onClick={()=>{handleOnclick(index)}}>
                                                        查看
                                                    </button>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title style={{color: 'black'}} hidden={typeof(item.categories) === "undefined"} >{item.categories}</Card.Title>
                                                <Card.Text style={{color: 'black'}}>
                                                    {
                                                        item?.distance ?
                                                            <span>{item.distance} Km</span> :
                                                            null
                                                    }
                                                    {item.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </div>
    )
}