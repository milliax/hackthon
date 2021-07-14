import Title from "../component/Title";
import {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";
import {
    CardContent,
    Chip,
    Collapse, Grid,
    LinearProgress,
    makeStyles,
    Paper,
    Link
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GoogleMapSection from "../component/Report/GoogleMapSection";

export default function Report() {
    const center = {lat:23,lng:120}
    const [latitude, setLatitude] = useState(23)
    const [longitude, setLongitude] = useState(120)
    const [zoom,setZoom] = useState(7)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([
        {id: 1, name: "陸域生態系統破壞"},
        {id: 2, name: "森林管理缺失"},
        {id: 3, name: "沙漠化"},
        {id: 4, name: "土地劣化"},
        {id: 5, name: "生物多樣性喪失"}
    ])
    const [categoriesSelectedData, setCategoriesSelectedData] = useState([])
    const [categoryExpanded, setCategoryExpanded] = useState(false)
    const isInitState = useRef(false)

    async function Send() {
        try {
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/posts`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    name,
                    content,
                    lat: latitude,
                    lng: longitude,
                    categories: categoriesSelectedData.map(x => x.id)
                })
            })
            const response = await res.json()
            setLoading(false)
            console.log(response)
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
            })
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: theme.spacing(0.5),
            margin: 0
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    }));

    function handleAdd(e) {
        setCategories((prev) => {
            return prev.filter((x) => {
                return x.id !== e.id
            })
        })
        setCategoriesSelectedData((prev) => {
            return [
                ...prev,
                e
            ]
        })
    }

    function ShowCategories(props) {
        const classes = useStyles();
        let arr = []
        for (let cat of props.categories) {
            arr.push(
                <li key={cat.id}>
                    <Chip
                        label={cat.name}
                        onDelete={() => handleAdd(cat)}
                        onClick={() => handleAdd(cat)}
                        deleteIcon={<AddIcon/>}
                    />
                </li>
            )
        }
        return (
            <Paper component="ul" className={classes.root}>
                {arr}
                {
                    (arr.length === 0) ?
                        <li>無分類</li> :
                        null
                }
                <Link href={"/addCategory"}>&nbsp;新增分類</Link>
            </Paper>
        )
    }

    function handleClear() {
        setCategoriesSelectedData([])
    }

    function ShowSelectedCategories(props) {
        const classes = useStyles();
        let arr = []
        for (let cat of props.categories) {
            arr.push(
                <li key={'selected_' + cat.id}>
                    <Chip
                        label={cat.name}
                        key={cat.id}
                    />
                </li>
            )
        }
        return (
            <Paper component="ul" className={classes.root}>
                {arr}
                {
                    (arr.length === 0) ?
                        <li>無選擇的分類</li> :
                        null
                }
            </Paper>
        )
    }

    function loadCategories(){
        fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/categories`,{
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }).then(r=>{
            console.log(r)
        })
    }

    useEffect(()=>{
        if(isInitState.current){
            loadCategories()
        }
    })

    return (
        <div id="wrapper">
            <LinearProgress hidden={!loading}/>
            <Title title="通報問題"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>通報問題</h1>
                        </header>
                        <div style={{height: '100vh', width: '100%'}}>
                            <div style={{height: '70vh', width: '55%'}}>
                                <GoogleMapSection onChange={(lat,lng)=>{
                                    setLongitude(lng)
                                    setLatitude(lat)
                                }}
                                                  zoom={zoom}
                                                  center={center}
                                                  longitude={longitude}
                                                  latitude={latitude}
                                />
                            </div>
                            <form onSubmit={event => {
                                event.preventDefault()
                                Send()
                            }}>
                                <div className="row gtr-uniform">
                                    <div className="col-12">
                                        <input type="text"
                                               value={name}
                                               onChange={e => {
                                                   setName(e.target.value)
                                               }}
                                               placeholder="通報問題名稱"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea value={content} onChange={e => {
                                            setContent(e.target.value)
                                        }} placeholder="通報內容" rows={5}/>
                                    </div>
                                    <div className={"col-12"}>
                                        <Grid container spacing={2} justifyContent="space-between">
                                            <Grid item xs={11}>
                                                <ShowSelectedCategories categories={categoriesSelectedData}/>
                                            </Grid>
                                            <Grid item xs={0.5} justifyContent="center">
                                                <AddIcon
                                                    onClick={() => setCategoryExpanded(!categoryExpanded)}/>
                                            </Grid>
                                            <Grid item xs={0.5}>
                                                <DeleteForeverIcon onClick={handleClear}/>
                                            </Grid>
                                        </Grid>
                                        <Collapse in={categoryExpanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <ShowCategories categories={categories}/>
                                            </CardContent>
                                        </Collapse>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="primary" style={{width: "100%"}}>通報</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}