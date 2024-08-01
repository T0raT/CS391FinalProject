import styled from 'styled-components'
import {ProductCard} from "./components/ProductCard.jsx";


const FlexMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
`





function App() {

  return (
      <>
      <header>
      {/* Search bar and dark/light mode toggle here */}
      </header>
      <FlexMain>
        {/* All reciepie cards are rendered here */}
        <ProductCard />
      </FlexMain>
      </>
  )
}

export default App
