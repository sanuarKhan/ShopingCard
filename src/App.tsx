import Layout from "./Layout";
import Home from "./pages/Home";
import styled from "styled-components";

const DIV = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

function App() {
  return (
    <DIV>
      <Layout>
        <Home />
      </Layout>
    </DIV>
  );
}

export default App;
