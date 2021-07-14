import Title from "../component/Title";
import {useEffect, useRef} from "react";
import {
    Grid
} from "@material-ui/core";
import Cookies from "universal-cookie/lib";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from '@material-ui/icons/Explore';

export default function Report() {
    const cookies = new Cookies()
    const isInitState = useRef(true)

    useEffect(()=>{
        if(isInitState.current){
            isInitState.current = false

        }
    })

    return (
        <div id="wrapper">
            {/*<LinearProgress hidden={!loading}/>*/}
            <Title title="總覽"/>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>總覽</h1>
                        </header>
                        <Grid container spacing={2}>
                            <Grid item xs={6} style={{textAlign: 'center'}}>
                                <button onClick={e=>location.replace('/report')} style={{color: 'white'}}><AddIcon/> 提出/回報志願服務</button>
                            </Grid>
                            <Grid item xs={6} style={{textAlign: 'center'}}>
                                <button onClick={e=>location.replace('/discover')} style={{color: 'white'}}><ExploreIcon/> 探索附近志願服務</button>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </div>
    )
}