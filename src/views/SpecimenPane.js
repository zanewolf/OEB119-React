import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Box, Flex, Image} from 'rebass/styled-components';
import ReactPlayer from 'react-player'
import { DataContext, IdContext } from '../Viewer'
import SketchFabViewer from './SketchFabViewer';
import MetaData from './MetaData';
import watermark from '../assets/watermark.png'
import pic from '../data/Technologies/Picture3.jpg';



const Pane = props =>
  <Box
    {...props}
    sx={{
      height: '100%',
      width:['100%','65%'],
      backgroundColor: 'black'
    }}
  />


const Lightbox = styled(Image)`
  max-height: 75vh;
  width: auto;
  object-fit: contain;
  background-color:black;
`

const PaneWrapper = ({children}) => {
  return(
    <Pane>
      <Flex sx={{flexFlow:'column nowrap', position:'fixed', width:'inherit',top:'0%', justifyContent:'flex-start', alignItems:'stretch'}}>
      {children}
      </Flex>
    </Pane>
  )
}


const WatermarkDiv = styled.div`
  background-image: url(${watermark});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: luminosity;
  opacity: 0.05;
  z-index: 5;
  position: absolute;
  width: 150%;
  height: 150%;
  top: 0;
  left: 0;
  pointer-events : none;
`

const Watermark = (props) => {
  console.log(props.props);
  if (props.props==="Museum of Comparative Zoology (MCZ)"){
    return(
      <WatermarkDiv />
    )} else {
      return null
    }
}


const SpecimenPane = () => {
  const data = useContext(DataContext)
  const specimenId = useContext(IdContext)
  const specimen = data.specimens[specimenId]
  console.log(specimen);

  if (specimen.type==="sketchfab"){
    return(
      <PaneWrapper>
          <Box>
            <Watermark props={specimen.metadata.description}/>
            <SketchFabViewer url={specimen.resource} />
          </Box>
          <Box sx={{alignSelf:'center', marginTop: '3%'}}>
            <MetaData data={specimen}/>
          </Box>
      </PaneWrapper>
    )} else if (specimen.type.split("-")[0]==="video"){
    return(
      <PaneWrapper>
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <ReactPlayer
              url={specimen.resource} playing loop />
          </Box>
          <Box sx={{alignSelf:'center', marginTop: '3%'}}>
            <MetaData data={specimen}/>
          </Box>
      </PaneWrapper>
    )} else if (specimen.type==="file"){
    return(
      <PaneWrapper>
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <Lightbox
              // src={"../data/Technologies" + specimen.resource}/>
              src={process.env.PUBLIC_URL+"/images/"+specimen.resource}/>
          </Box>
          <Box sx={{alignSelf:'center', marginTop: '3%'}}>
            <MetaData data={specimen}/>
          </Box>
      </PaneWrapper>
    )} else {
    return(
      <PaneWrapper>
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <Lightbox src={specimen.resource} />
          </Box>
          <Box sx={{alignSelf:'center', marginTop: '3%'}}>
            <MetaData data={specimen}/>
          </Box>
      </PaneWrapper>)}
}

export default SpecimenPane
