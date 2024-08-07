import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  max-width: 18rem;
  height: 16rem;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: 0.5s;

  .recepie-image {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    transition: 0.5s;
    border-radius: 1rem;
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    background-color: white;
  }

  .cuisines-container,
  .diets-container {
    text-align: center;
  }

  .cuisine-tag,
  .diet-tag {
    margin: 0.5rem 0 0 0.3rem;
    display: inline-block;
    padding: 0 0.4rem 0 0.4rem;
    border: solid 1px black;
    border-radius: 5px;
  }

  .read-more {
    align-self: start;
    margin-top: 0.8rem;
    cursor: pointer;
  }

  &:hover {
    height: 20rem;

    .title {
      color: black;
      transition: 1s;
    }

    .recepie-image {
      top: -8rem;
      height: 70%;
      scale: 0.8;
      border-radius: 0.5rem;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
      -webkit-filter: blur(0);
      -moz-filter: blur(0);
      -o-filter: blur(0);
      -ms-filter: blur(0);
    }

    .img-container {
      -webkit-filter: blur(0);
      -moz-filter: blur(0);
      -o-filter: blur(0);
      -ms-filter: blur(0);
    }
  }
`;

const TitleStyle = styled.h3`
  font-size: calc(0.7rem + 0.7vw);
  text-align: center;
  padding: 0.5rem;
  z-index: 1;
  color: white;
  transition: 0.3s;
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

const SummaryStyle = styled.p`
  font-size: 1rem;
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
  const readyInMinutes = props.readyInMinutes || "";
  const cuisines = props.cuisines || [];
  const diets = props.diets || [];

  return (
    <>
      <Card className="card-container">
        <img className="recepie-image" src={imgUrl} alt="No Image" />

        <TitleStyle className="title" imgurl={imgUrl}>
          {title}
        </TitleStyle>
        <p>Ready in: {readyInMinutes} minutes</p>
        <div className="cuisines-container">
          {cuisines.map((item) => (
            <span className="cuisine-tag" key={props.key}>
              {item}
            </span>
          ))}
        </div>
        <div className="diets-container">
          {diets.map((item) => (
            <span className="diet-tag" key={props.key}>
              {item}
            </span>
          ))}
        </div>

        <p className="read-more" onClick={openModal}>
          Read Recipe &#x21c0;
        </p>
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
