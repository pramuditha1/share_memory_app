import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

export const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts())
    }, [currentId, dispatch])
    /*
    use currentId in watch array, when we update a post currentId fills with its _id value. after updation 
    value clears and assign null. hence useEffect in App.js executes and dispatch getPosts() again and render 
    updated posts.
    */
    return(
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId = {setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                </Grid>
                </Grid>
            </Container>
        </Grow>
    )
 }