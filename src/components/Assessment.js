import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import lightblue from "@material-ui/core/colors/lightBlue";
import Grid from '@material-ui/core/Grid';
import Header from "./Header"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
    grammar: {
        display: 'flex',
        '& > *': {
            //   backgroundColor: blue[50],
        },
    },
    bluecolor: {
        backgroundColor: lightblue[300],
        padding: 30
    },
    bluecolorcpy: {
        backgroundColor: lightblue[300],
    },

}));


function GrammaticalAndAssessment() {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home");
    };

    return (
        <div>
            <Header></Header><br />
            <div className={classes.grammar}>

                <Paper elevation={3} style={{ width: '100%' }}>
                    <Box p={1.5} className={classes.bluecolor}>
                        <Typography variant="h4" style={{ textAlign: 'left', color: 'white' }}>
                            Assessment
                        </Typography><br />
                        <Paper elevation={2}>
                            <Typography style={{ textAlign: 'left', padding: 10 }}>
                                MCQ's here
                            </Typography>
                        </Paper>

                    </Box>
                    <br />
                    <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'right', paddingRight: 30 }}>
                        <Grid item>
                            <Button variant="contained" className={classes.bluecolorcpy} onClick={() => { navigate("/grammar"); }}>
                                BACK
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className={classes.bluecolorcpy} onClick={handleSubmit}>
                                END CHAPTER
                            </Button>
                        </Grid>
                    </Grid>
                    <br />
                </Paper>
            </div>
            <div><br />
                <Footer></Footer>
            </div>
        </div>
    );
}

export default GrammaticalAndAssessment;