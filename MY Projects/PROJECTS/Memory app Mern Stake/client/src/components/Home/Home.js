import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Forms/Form";

import useStyles from "../../styles";



 const Home= () => {

     const [currentId, setCurrentId] =useState (0);
     const classes = useStyles();
     const dispatch = useDispatch();
   
     useEffect(() => {
       dispatch(getPosts());
     }, [dispatch]);

  return (
     <Grow in>
     <Container>
       <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
           <Posts setCurrentId={setCurrentId}/>
         </Grid>
         <Grid className={classes.grid} item xs={12} sm={4}>
           <Form currentId={currentId} setCurrentId={setCurrentId}/>
         </Grid>
       </Grid>
     </Container>
   </Grow>
  )
}

export default Home;
