import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = styled.div`
  // Temp styling TODO: Add more styling
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 18rem;
  height: 16rem;
  border: 1px solid black;
  cursor: pointer;
  z-index: 1;
  transition: 0.5s;

  &:hover {
    height: 20rem;

    .title {
      visibility: visible;
      transition: visibility 05s;
    }

    .recepie-image {
      top: -5rem;
      scale: 0.8;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
    }
  }
`;

const TitleStyle = styled.h3`
  visibility: hidden;
  font-size: calc(0.8rem + 0.8vw);
  text-align: center;
  padding: 0.5rem;
  z-index: 1;
  transition: 0.3s;
`;

const ImgStyle = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 1rem;
  z-index: 0;
  transition: 0.5s;
`;

const SummaryStyle = styled.p`
  font-size: 1rem;
`;

const ModalDiv = styled.div`
  // Temp styling TODO: Add more styling
  display: ${(props) => (props.modalstatus === "true" ? "block" : "none")};
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
  transition: all 1s;
`;
const ModalBg = styled.div`
  // Temp styling TODO: Add more styling
  display: ${(props) => (props.modalstatus === "true" ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.modalstatus === "true" ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  backdrop-filter: ${(props) =>
    props.modalstatus === "true" ? "blur(5px)" : "none"};
  transition: all 1s;
`;

export const ProductCard = (props) => {
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    // Separating the to openModal and closeModal to offer more control.
    setModalStatus(true);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setModalStatus(false);
    console.log("Modal closed");
  };

  // All prop variables
  const title = props.title;
  const nutrition = props.nutrition;
  // console.log(nutrition);
  const neutrients = nutrition
    .map((nutrient) => `${nutrient.name}: ${nutrient.amount + nutrient.unit}`)
    .join(", ");
  const summary = props.summary;
  const imgUrl = props.imgUrl;

  return (
    <>
      <Card className="card-container" onClick={openModal}>
        <ImgStyle className="recepie-image" src={imgUrl} alt="" />
        <TitleStyle className="title" imgurl={imgUrl}>
          {title}
        </TitleStyle>
      </Card>

      <ModalDiv className={ModalDiv} modalstatus={modalStatus.toString()}>
        {/*(Tiger): This is probably a terrible idea and I am open to suggestions */}
        <SummaryStyle
          dangerouslySetInnerHTML={{ __html: summary }}
          className="text-xs"
        />
        <p>{neutrients}</p>
        <button onClick={closeModal}>Close</button>
      </ModalDiv>

      <ModalBg className="ModalBg" modalstatus={modalStatus.toString()} />
    </>
  );
};
