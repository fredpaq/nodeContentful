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


export default function QuerySecond () {
    const classes = useStyles();
    const dataSecond = useStaticQuery(graphql`  
    {
      second: allContentfulSecond {
        totalCount
        nodes {
            title
            id
        }
      }
    }  
  `) 
  
  return(
    <div>{dataSecond.second.nodes.map((node, id) =>{
      return(
        <Box m={10} key ={node.id} className ={classes.root}>
          {node.title} 
        <Link to={`second/${id+1}`}  >{node.title}</Link>
        </Box>
      )
      })}  
    </div>
  );
  }