/*
 * Product card component by Daian Liu (Tiger)
 * Display a card with following recipe details:
 * Recipe title,
 *        image,
 *        cuisines,
 *        diets,
 *        summary,
 *        nutrients,
 *        instructions,
 *        ingredients
 *
 * Dark theme props added by Arien.
 * */

import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkThemeContext } from "./DarkThemeContextProvider.jsx";

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
  cursor: pointer;

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
    // All tags for cuisines and diets
    margin: 0.5rem 0 0 0.3rem;
    display: inline-block;
    padding: 0 0.4rem 0 0.4rem;
    border: ${(props) => (!props.theme.dark ? "#1c2029" : "white")} solid 1px;
    border-radius: 5px;
  }

  .read-more {
    // Originally a button now just to indicate the card is clickable
    align-self: start;
    margin-top: 0.8rem;
    cursor: pointer;
  }

  &:hover,
  &:active {
    // All hover effects on the card
    height: 20rem;

    .title {
      // Arien: used the context to change the title color based on the theme
      color: ${(props) => (props.theme.dark ? "white" : "black")};
      background: none;
      transition: 0.3s;
    }

    .recepie-image {
      top: -8rem;
      height: 70%;
      scale: 0.8;
      border-radius: 0.5rem;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
      transition: 0.5s;
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 50rem;
  // Arien: used the context to change the title color based on the theme
  background-color: ${(props) => (!props.theme.dark ? "white" : "#1c2029")};
  padding: 3rem;
  border-radius: 10px;
  z-index: 1000;
  transition: all 0.5s;
  overflow: scroll;
  a {
    color: rgb(0, 146, 66);
  }

  @media screen and (max-width: 790px) {
    max-width: 80%;
    max-height: 38rem;
    padding: 1.5rem;
  }

  .close-modal-button {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: 2rem;
    width: 2rem;
    opacity: 0.3;
    transition: 0.1s;
    cursor: pointer;
    &:before,
    &:after {
      position: absolute;
      left: 1rem;
      height: 2rem;
      width: 2px;
      background-color: ${(props) => (!props.theme.dark ? "#1c2029" : "white")};
      content: "";
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      opacity: 1;
    }
  }

  .ingredients {
    font-size: 1.1rem;
  }

  .nutrients {
    font-size: 0.9rem;
  }

  .insturctions-list > li {
    list-style-type: none;
    font-size: 1.1rem;
  }
`;

const SummaryStyle = styled.p`
  font-size: 1.1rem;
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

export const ProductCard = (props) => {
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    /*
     * Modal functions sets modalStatus to true or false
     * modalStatus is passed to ModalDiv and ModalBg for conditional rendering.
     * */
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
  nutrients = nutrients // Clean up nutrients data for better formatting.
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
        ` ${ingredient.amount} ${ingredient.unit} ${ingredient.name} `,
    )
    .join(", ");

  const darkContext = useContext(DarkThemeContext); // added by Arien

  return (
    <>
      <Card className="card-container" theme={darkContext} onClick={openModal}>
        <img className="recepie-image" src={imgUrl} alt="No Image" />

        <TitleStyle className="title" imgurl={imgUrl} theme={darkContext}>
          {title}
        </TitleStyle>
        <p>Ready in: {readyInMinutes} minutes</p>
        <div className="cuisines-container">
          {cuisines.map((item) => (
            <span
              className="cuisine-tag"
              key={props.id + Math.floor(Math.random() * 999)}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="diets-container">
          {diets.map((item) => (
            <span
              className="diet-tag"
              key={props.id + Math.floor(Math.random() * 999)}
            >
              {item}
            </span>
          ))}
        </div>

        <p className="read-more">Click to read recipe!</p>
      </Card>

      <ModalDiv
        className={ModalDiv}
        modalstatus={modalStatus.toString()}
        theme={darkContext}
      >
        {/*(Tiger): This is probably a terrible idea and I am open to suggestions */}
        <SummaryStyle
          dangerouslySetInnerHTML={{ __html: summary }}
          className="text-xs"
        />

        <br />
        <h2>Ingredients</h2>
        <p className="ingredients">{ingredients}</p>

        <br />
        <p className="nutrients">{nutrients}</p>

        <br />
        <h2>Instructions</h2>
        <ol className="insturctions-list">
          {instructions.map((step) => (
            <li key={step.number}>
              <span style={{ color: "red" }}>Step {step.number}</span> :{" "}
              {step.step}
            </li>
          ))}
        </ol>
        <a className="close-modal-button" onClick={closeModal} />
      </ModalDiv>

      <ModalBg className="ModalBg" modalstatus={modalStatus.toString()} />
    </>
  );
};
