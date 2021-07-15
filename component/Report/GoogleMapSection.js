import GoogleMapReact from "google-map-react"
import {useState} from "react";
import RoomIcon from '@material-ui/icons/Room';

export default function GoogleMapSection(props){
    const [latitude,setLatitude] = useState(props.latitude)
    const [longitude,setLongitude]= useState(props.longitude)
    function handleOnChange({x,y,lat,lng}){
        setLongitude(lng)
        setLatitude(lat)
        props.onChange(lat,lng)
    }

    return(
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE }}
            zoom={props.zoom}
            center={props.center}
            onClick={handleOnChange}
        >
            <RoomIcon lat={latitude} lng={longitude}/>
        </GoogleMapReact>
    )
}