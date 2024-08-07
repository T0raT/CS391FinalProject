import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = styled.div`
  //  This is the recepie card container
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

  .title {
    // Dish title
    background: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(5px);
  }

  .recepie-image {
    // Image of the dish
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
    transition: 0.5s;
    border-radius: 1rem;

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
    // All hover effects on the card
    height: 20rem;

    .title {
      color: black;
      background: none;
      transition: 0.3s;
    }

    .recepie-image {
      top: -8rem;
      height: 70%;
      scale: 0.8;
      border-radius: 0.5rem;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
    }

    .img-container {
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
  // Container div for all recipe details
  display: ${(props) => (props.modalstatus === "true" ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 50rem;
  padding: 3rem;
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  transition: all 1s;
  overflow: scroll;

  .close-modal-button {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
  }

  .insturctions-list > li {
    list-style-type: none;
  }
`;

const ModalBg = styled.div`
  // This is the background of the modal that darkens + blur the background
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
  let nutrients = props.nutrients;
  // console.log(nutrition);
  nutrients = nutrients
    .map((nutrient) => `${nutrient.name} ${nutrient.amount + nutrient.unit}`)
    .join(", ");
  const summary = props.summary;
  const imgUrl = props.imgUrl;
  const readyInMinutes = props.readyInMinutes || "";
  const cuisines = props.cuisines || [];
  const diets = props.diets || [];
  const instructions = props.instructions || [];
  let ingredients = props.ingredients || [];
  ingredients = ingredients
    .map(
      (ingredient) =>
        `${ingredient.name} ${ingredient.amount} ${ingredient.unit}`,
    )
    .join(", ");
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
        <p>{ingredients}</p>
        <p>{nutrients}</p>

        <ol className="insturctions-list">
          {instructions.map((step) => (
            <li key={step.number}>
              Step {step.number}: {step.step}
            </li>
          ))}
        </ol>
        <button className="close-modal-button" onClick={closeModal}>
          Close
        </button>
      </ModalDiv>

      <ModalBg className="ModalBg" modalstatus={modalStatus.toString()} />
    </>
  );
};
