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
    Link, Button
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GoogleMapSection from "../component/Report/GoogleMapSection";
import Cookies from "universal-cookie/lib";
import FormData from 'form-data';

export default function Report() {
    const cookies = new Cookies()
    const center = {lat:23,lng:120}
    const [latitude, setLatitude] = useState(23)
    const [longitude, setLongitude] = useState(120)
    const [zoom,setZoom] = useState(7)
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoriesSelectedData, setCategoriesSelectedData] = useState([])
    const [categoryExpanded, setCategoryExpanded] = useState(false)
    const [images, setImages] = useState([])
    const FileInputElement = useRef()
    const submitFormData = new FormData()
    //const [imageUrl, setImageUrl] = useState('')
    const isInitState = useRef(true)

    async function Send() {
        try {
            setLoading(true)
            submitFormData.append('name', name)
            submitFormData.append('content', content)
            submitFormData.append('lat', latitude)
            submitFormData.append('lng', longitude)
            categoriesSelectedData.map(x => x.id).forEach(x=>submitFormData.append('categories[]', x))
            let files = FileInputElement.current.files;
            for(let file of files){
                submitFormData.append('image[]', file)
            }

            console.log(submitFormData)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/posts`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${cookies.get('access_token')}`
                }, body: submitFormData
            })
            const response = await res.json()
            setLoading(false)
            if(typeof response.status !== 'undefined' && response.status !== 200){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response?.error?.localizedMessage ?? response?.error?.message
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '成功',
                    text: '成功回報'
                }).then(()=>{
                    location.href = '/'
                })
            }

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

    function setFormData(){
        submitFormData.append(...arguments)
    }

    function handleChangeImage(evt) {
        var files = evt.target.files;
        for(let file of files){
            (function(file){
                var reader = new FileReader();
                reader.onload = function (upload) {
                    setImages((prev)=>{
                        if(prev.length >= 5) {
                            Swal.fire({
                                icon: "error",
                                title: "錯誤" ,
                                text: "只能上傳最多五張照片，請重新上傳"
                            }).then(()=>{
                                setImages([])
                            })
                        }
                        return [...prev, upload.target.result]
                    });
                };
                reader.readAsDataURL(file)
            })(file)
        }
    }

    function loadCategories(){
        fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/categories`,{
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }).then(r=>r.json()).then(r=>{
            console.log(r)
            setCategories(r)
        })

    }

    useEffect(()=>{
        if(isInitState.current){
            isInitState.current = false
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
                                               required
                                               placeholder="通報問題名稱"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea value={content} onChange={e => {
                                            setContent(e.target.value)
                                        }} placeholder="通報內容" rows={5} required/>
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
                                        <div style={{height: '60vh',display:'flex',alignItems: 'center',position: 'relative'}}>
                                            <div style={{height:'100%',width:'100%'}}>
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
                                        </div>
                                    </div>

                                    <div className={"col-12"}>
                                        <button hidden={images.length >= 5} onClick={()=>file.click()} className="primary" style={{fontSize: "11px"}} type={'button'}>
                                            上傳圖片 ({images.length}/5)
                                        </button>
                                        <input type="file" name="file"
                                               className="upload-file"
                                               id="file"
                                               ref={FileInputElement}
                                               onChange={handleChangeImage}
                                               accept="image/*,.png,.jpg,.gif,.PNG,.JPS,.GIF"
                                               hidden
                                               multiple
                                        />
                                        <br/>
                                        <Grid container spacing={2}>
                                        {
                                            images.map((img)=>{
                                                return (
                                                    <Grid item key={Math.random()}>
                                                        <img
                                                        width={300}
                                                        src={img}
                                                        alt={'Image'}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                        </Grid>
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