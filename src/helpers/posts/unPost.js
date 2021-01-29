import React, { useState} from 'react'
import Button from '@material-ui/core/Button'
// import {graphql, useStaticQuery} from 'gatsby'
import   {FacebookShareButton,
	FacebookIcon, 
	} from "react-share";
import Card from '@material-ui/core/Card';
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Box from '@material-ui/core/Box'

import { navigate } from 'gatsby'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


 
const UnPost =  ({unitePost, k})=> {

//console.log({engagement}, engagement, engagement.totalCount, k)
console.log({unitePost} , k)
const [readMore, setReadMore] = useState(false);

const title= k.pageContext.title

const nextPage =(e)=>{   
	let pageActuelle = k.pathContext.id +1
	let nbreTotalPage = unitePost.totalCount
	let pageSuivante = 1
	if (pageActuelle < nbreTotalPage){
	 pageSuivante = pageActuelle +1
	}
	navigate(`/posts/`+pageSuivante)
 }

const previousPage =(e)=>{
	let pageActuelle =  k.pathContext.id +1
	let pagePrecedente = 1
	if ( pageActuelle > pagePrecedente){
	 pagePrecedente = pageActuelle -1
	}
	navigate(`/posts/`+pagePrecedente)
}

	
  	return(
	<>
		{unitePost.nodes.map((node) => {
			if(title === node.title){
		return(
		<>
		<Card style={{marginTop: '2em', backgroundColor: '#FFF6B5', boxShadow: '10px 5px 5px black'}} 
		key={node.id} >
			<Box style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
			<Box m ={2} style={{width: '20%'}}>
					<Img fixed={node.image.postimagFixed}  style ={{borderRadius: '50%'}} />
				</Box>
				<Box m ={2}  style={{width: '60%'}}>
					<h1 style={{color:'#808080',textShadow: '1px 1px 1px black'}}>{node.title} </h1>
				</Box> 
				<Box   m ={2}  style={{width: '20%'}}>
					<FacebookShareButton aria-label="settings"
						url={"http://10.0.0.3:8000"}
						quote={"gatsbyJS"}
						hashtag="#POSTFRED"
						>
							<FacebookIcon  size={32} round={true}/>
					</FacebookShareButton>
				</Box>
			</Box>
			<Box m ={2}>
				<Img fluid ={node.image.postimageFluid}/>
			</Box>
			<Box style={{alignItems: 'center', textAlign: 'center', color:'red'}}>
				{node.text}poi
			</Box>
			<Box  m ={2} style={{ color:'#808080'}}>		
				{readMore ?  documentToReactComponents(node.detail.json) : null}
				<Button onClick={() => setReadMore(!readMore)}>
				{readMore ? 'show less' : '  read more'}
				</Button>
		
			</Box> 
		</Card>
		</>
		)
	}
	})}
	<Box style={{ textAlign: 'center', width: '100%'}}>
		<SkipPreviousIcon style={{fontSize: '50'}} onClick ={previousPage}/>
		<SkipNextIcon style= {{fontSize: '50'}} onClick = {nextPage}/>
	</Box>	
	</>
  );
}

export default UnPost