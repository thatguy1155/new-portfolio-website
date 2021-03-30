import React from 'react'
import Avatar from './components/Avatar.js'
import TextContent from './components/TextContent.js'
import Loading from '../components/Loading.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './bio.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
        display:'flex',
        justifyContent:'center',
    }
  }));

  

export default function Home() {
    const classes = useStyles();

    return (
        <>
        <div className="home-content">
            <div className={classes.root}>
                <Grid className={classes.gridContainer} container>
                    <Grid item xs={10} sm={6} md={3} >
                        <Avatar />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} >
                        <TextContent className="home-text" />
                    </Grid>
                </Grid>
            </div>
        </div>
        </>
    )
}
