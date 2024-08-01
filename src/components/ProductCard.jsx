import styled from "styled-components";

function openModal() {
  // Open the recepie sepcific modal here

}

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
`

const ModalDiv = styled.div`
    display: inline;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-color: white;
    z-index: 1000;
    border: 1px solid black;
    
`

export const ProductCard = () => {
  return (
      <Card onClick={openModal}>Test Card
        <ModalDiv id="ModalDiv">Modal Content Here</ModalDiv>
      </Card>
  )
}