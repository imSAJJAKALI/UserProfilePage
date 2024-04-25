import styled from "styled-components"
import ProfilePage from "./pages/ProfilePage"

function App() {
 
  return (
    <Main>
      <ProfilePage/>
    </Main>
  )
}

export default App

const Main = styled.div`
/* width: 100%; */
padding:50px 100px;
background-color: aliceblue;

@media (max-width: 1024px) {
  padding: 20px 20px;
}
@media (max-width: 768px) {
  padding: 20px 20px;
}
`
