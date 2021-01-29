import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import UnPost from './unPost'


const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex',
     justifyContent: 'center',		
    // alignContent:'center',
    backgroundColor: '	#808080',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))



const PostsTemplate =  (k)=> {

const classes = useStyles();

const data = useStaticQuery(graphql`   
{
 post: allContentfulPosts {
    nodes {
      title
      id
      reponse
      probleme
      image{
          postimageFluid: fluid(maxWidth:300, maxHeight:300 ){
              ...GatsbyContentfulFluid
          }
          postimageFixed: fixed(width: 32, height: 32, quality: 20 ){
            ...GatsbyContentfulFixed
        }
      }
      detail {
          json
      }
      detailprobleme{
          json
      }
    }
    totalCount
  }
}
`)

const remove=()=>{
  console.log('remove')
}

const title = k.title    
  return(
    <div className={classes.root}>
      <Grid item='true' xs={12} sm={6}  > 
      <Box style={{ textAlign: 'center', marginTop:'1em'}}>
      <img alt="" src="https://avatars.githubusercontent.com/u/75025115?s=460&u=a3c407ef44ca0e0ac7bb597514e39db168594180&v=4" style={{ borderRadius: '50%', width:'5em'}}/>
      <h3 style={{color: '#FFF6B5', textShadow: '1px 1px 2px black'}}>Pages... </h3>
      </Box>
      <Box style={{ margin:'1em'}}>
      <UnPost
      unitePost = {data.post} 
      k={k}
      /> 
      </Box>
      </Grid>
    </div>
  );
}

export default PostsTemplate