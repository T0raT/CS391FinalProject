import styled from 'styled-components'


const Card = styled.div`
    width: 100%;
    max-width: 18rem;
    height: 20rem;
    border: 1px solid black;
    text-align: center;
    cursor: pointer;
`

const FlexMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
`



function openModal() {
  // Open the recepie sepcific modal here
  
}

function App() {

  return (
      <>
      <header>
      {/* Search bar and dark/light mode toggle here */}
      </header>
      <FlexMain>
        {/* All reciepie cards are rendered here */}

        <Card onClick={openModal}>Test</Card>
      </FlexMain>
      </>
  )
}

export default App
