import Title from "../component/Title";
import Head from "next/head";
import GoogleMap from 'google-map-react'
import {useState} from "react";
import EditLocationIcon from '@material-ui/icons/EditLocation';
import Swal from "sweetalert2";
import {
    Box,
    Card, CardContent,
    CardHeader,
    Chip,
    Collapse, Grid,
    IconButton,
    LinearProgress,
    makeStyles,
    Paper,
    TextField
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Report() {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([
        {id:1 ,name:"Web"},
        {id:2 ,name:"C++"},
        {id:3 ,name:"++C"},
        {id:4 ,name:"JS"},
        {id:5 ,name:"FQN"},
        {id:6 ,name:"LCS"}
    ])
    const [categoriesSelectedData, setCategoriesSelectedData] = useState([])
    const [categoryExpanded, setCategoryExpanded] = useState(false)

    async function Send(){
        try{
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/posts`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body: JSON.stringify({
                    name,
                    content
                })
            })
            const response = await res.json()
            setLoading(false)
            console.log(response)
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err
            })
        }
    }

    function handleAdd(e){
        setCategories((prev)=>{
            return prev.filter((x)=>{
                return x.id !== e.id
            })
        })
        setCategoriesSelectedData((prev)=>{
            return [
                ...prev,
                e
            ]
        })
    }

    function ShowCategories(props){
        const useStyles = makeStyles((theme) => ({
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                padding: theme.spacing(0.5),
                margin: 0,
            },
            chip: {
                margin: theme.spacing(0.5),
            },
        }));
        const classes = useStyles();
        let arr = []
        for(let cat of props.categories){
            arr.push(
                <li key={cat.id}>
                    <Chip
                        label={cat.name}
                        onDelete={e=>handleAdd(cat)}
                        deleteIcon={<AddIcon/>}
                        key={cat.id}
                    />
                </li>
            )
        }
        return (
            <Paper component="ul" className={classes.root}>
                {arr}
            </Paper>
        )
    }

    function SelectedCategories(props){
        let arr = []
        for(let cat of props.categories){
            arr.push(
                <option value={cat.id} >{cat.name}</option>
            )
        }
        return arr
    }

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
                                               onChange={e =>{setName(e.target.value)}}
                                               placeholder="通報問題名稱"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea value={content} onChange={e =>{setContent(e.target.value)}} placeholder="通報內容" rows={5}/>
                                    </div>

                                    <div className={"col-12"}>
                                        <Grid container spacing={2} justifyContent="space-between">
                                            <Grid item xs={10}>
                                                <select multiple className={"ml-2 w-100"}>
                                                    <SelectedCategories categories={categoriesSelectedData} />
                                                </select>
                                            </Grid>
                                            <Grid item xs={2} justifyContent="center">
                                                <ExpandMoreIcon onClick={()=>setCategoryExpanded(!categoryExpanded)}/>
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