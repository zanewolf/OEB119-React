import React, {useContext, useEffect, useState} from 'react';
import Modal from 'styled-react-modal'
import { ModalProvider } from 'styled-react-modal'
import {ReactComponent as Icon} from '../assets/angler-fish2.svg'
import PhyloCanvas from './PhyloCanvas';
import { DataContext, LabContext } from '../Viewer';
import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player'


const TreeModal = Modal.styled`
  width: 49vmax;
  height: 57vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0);
  z-index: 30;
`


const Tree = (props) => {
  const data = useContext(DataContext)
  const lab = useContext(LabContext);
  const [show, setShow] = useState(false);
  const [tree, setTree] = useState(data.labs[lab].tree);
  function toggleShow(){
    setShow(!show)
  };
  useEffect (() => {
    setTree(data.labs[lab].tree)
  },[lab])
  return (
      <ModalProvider>
        <Icon width={props.iconSize} onClick={toggleShow} style={{cursor:'pointer'}} />
        <TreeModal
            isOpen={show}
            onBackgroundClick={toggleShow}
            onEscapeKeydown={toggleShow}>

              <img src={require("../data/trees/"+tree)}/>
          </TreeModal>
    </ModalProvider>
  )

}

export default Tree;
