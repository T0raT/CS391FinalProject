import styled from "styled-components";
import {useEffect, useState} from "react";


const Card = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 18rem;
    height: 20rem;
    border: 1px solid black;
    cursor: pointer;
    z-index: 1;
`

const ModalDiv = styled.div`
    display: ${(props) => props.modalStatus === "true" ? "block" : "none"};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-color: white;
    z-index: 1000;
    border: 1px solid black;
    cursor: default;
    
`
const ModalBg = styled.div`
    width: 100svh;
    height: 100svh;
    
`

export const ProductCard = () => {

  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    // Separating the to openModal and closeModal to offer more control.
    setModalStatus(true);
    console.log("Modal opened")
  }

  const closeModal = () => {
    setModalStatus(false);
    console.log("Modal closed")
  }

  return (
      <>
        <Card onClick={openModal}>Test Card</Card>

        <ModalBg />

        <ModalDiv modalStatus={modalStatus.toString()}>
          Modal Content Here
          <button onClick={closeModal}>Close</button>
        </ModalDiv>
      </>
  )
}