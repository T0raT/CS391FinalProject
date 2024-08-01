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
    transition: all 1s;
`

const ModalDiv = styled.div`
    display: ${(props) => props.modalStatus === "true" ? "block" : "none"};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 40rem;
    max-height: 40rem;
    background-color: white;
    z-index: 1000;
    border: 1px solid black;
    cursor: default;
    transition: all 1s;
`
const ModalBg = styled.div`
    display: ${(props) => props.modalStatus === "true" ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.modalStatus === "true" ? "rgba(0, 0, 0, 0.5)" : "transparent"};
    backdrop-filter: ${(props) => props.modalStatus === "true" ? "blur(5px)" : "none"};
    transition: all 1s;
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
        <Card className="Product Card" onClick={openModal}>Test Card <p>{`>Click Me!<`}</p></Card>
        <ModalDiv
            className={ModalDiv}
            modalStatus={modalStatus.toString()}
        >

          Modal Content Here
          <button onClick={closeModal}>Close</button>
        </ModalDiv>
        <ModalBg className="ModalBg" modalStatus={modalStatus.toString()}/>
      </>
  )
}