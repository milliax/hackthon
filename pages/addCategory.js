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
import Cookies from "universal-cookie/lib";

export default function AddCategory() {
    const cookies = new Cookies()
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const isInitState = useRef(true)

    async function Send() {
        try {
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/categories`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+cookies.get('access_token')
                }, body: JSON.stringify({
                    name
                })
            })
            const response = await res.json()
            setLoading(false)
            loadCategories()
            setName('')
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

    function ShowCategories(props) {
        const classes = useStyles();
        let arr = []
        for (let cat of props.categories) {
            arr.push(
                <li key={cat.id}>
                    <Chip
                        label={cat.name}
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
            </Paper>
        )
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
            <Title title="新增分類"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>新增分類</h1>
                        </header>
                        <div style={{height: '100vh', width: '100%'}}>
                            <form onSubmit={event => {
                                event.preventDefault()
                                Send()
                            }}>
                                <div className="row gtr-uniform">
                                    <div className={"col-12"}>
                                        分類預覽：<br/>
                                        <ShowCategories categories={categories}/>
                                    </div>
                                    <div className="col-12">
                                        <input type="text"
                                               value={name}
                                               onChange={e => {
                                                   setName(e.target.value)
                                               }}
                                               placeholder="類別名稱"/>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="primary" style={{width: "100%"}}>新增</button>
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