import React from "react"
import Box from '@material-ui/core/Box';
import QueryPost from './queryPost'
import QuerySecond from  './querySecond'

const IndexPage=()=>{
  return(
    <>
     <Box style={{ textAlign: 'center', marginTop:'1em'}}>
      <img alt="" src="https://avatars.githubusercontent.com/u/75025115?s=460&u=a3c407ef44ca0e0ac7bb597514e39db168594180&v=4" style={{ borderRadius: '50%', width:'5em'}}/>
     </Box>
    <div style={{textAlign:'center'}}>
    <mark>un exemple  en utilisant l api createPages et contentful  <br />
    avec des multiquesQueries dans gatsby-node.js 
    </mark>
    </div>
    <QueryPost />
    <QuerySecond />
    </>
  )
}

export default IndexPage
