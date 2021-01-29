import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import { Link } from "gatsby"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',		
    backgroundColor: '#808080',
    color: 'yellow',
  },
})
) 


export default function QueryPost () {
const classes = useStyles();
const dataPost = useStaticQuery(graphql`   
{
  post: allContentfulPosts {
    totalCount
    nodes{
      id
      probleme
      title
    }
  }
}
`)

return(
    <div>{dataPost.post.nodes.map((node, id) =>{
      return(      
          <Box m={10} key ={node.id} className ={classes.root}>
            {node.title} 
          <Link to={`posts/${id+1}`}  >{node.title}</Link>
          </Box>
      )
      })}  
    </div>
  );
}

