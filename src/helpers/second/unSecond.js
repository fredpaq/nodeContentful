import React from 'react'
import   {FacebookShareButton,
	} from "react-share";
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Img from "gatsby-image"
import Box from '@material-ui/core/Box'
import { navigate } from 'gatsby'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';



 
const UnPost =  ({uniteSecond, k})=> {

//console.log({engagement}, engagement, engagement.totalCount, k)
console.log({uniteSecond} , k)


const title= k.pageContext.title

const nextPage =(e)=>{   
	let pageActuelle = k.pathContext.id +1
	let nbreTotalPage = uniteSecond.totalCount
	let pageSuivante = 1
	if (pageActuelle < nbreTotalPage){
	 pageSuivante = pageActuelle +1
	}
	navigate(`/second/`+pageSuivante)
 }

const previousPage =(e)=>{
	let pageActuelle =  k.pathContext.id +1
	let pagePrecedente = 1
	if ( pageActuelle > pagePrecedente){
	 pagePrecedente = pageActuelle -1
	}
	navigate(`/second/`+pagePrecedente)
}

	
  	return(
	<>
		{uniteSecond.nodes.map((node) => {
			if(title === node.title){
		return(
		<>
		<Card style={{marginTop: '2em', backgroundColor: '#FFF6B5', boxShadow: '10px 5px 5px black'}} 
		key={node.id} >
			<Box style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
				<Box m ={2}  style={{width: '50%'}}>
					<h1 style={{color:'#808080',textShadow: '1px 1px 1px black'}}>{node.title} </h1>
				</Box> 
				<Box   m ={2}  style={{width: '50%'}}>
					<FacebookShareButton aria-label="settings"
						url={"http://10.0.0.3:8000"}
						quote={"gatsbyJS"}
						hashtag="#POSTFRED"
						>		
						<FavoriteIcon style={{color:'red', float:'right'}}/>
					</FacebookShareButton>
				</Box>
			</Box>
			<Box m ={2}>
                <Img fluid={node.imagelandscape.imagelandsapeFluid}  style ={{borderRadius: '2%'}} />
            </Box>
            <Box m ={5} style={{textAlign: 'center'}}>
				<Img fixed ={node.imageleft.imageleftFixed}/>
                <Img fixed ={node.imageRight.imageRightFixed}/>
			</Box>
			<Box style={{alignItems: 'center', textAlign: 'center', color:'red'}}>
				{node.title}
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