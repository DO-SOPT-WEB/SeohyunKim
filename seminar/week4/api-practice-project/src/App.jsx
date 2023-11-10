import styled from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";

import { useState } from "react";
import Post from "./components/Post";

function App() {
  const [data, setData] = useState(null);

  // GET

  // POST
  const postData = () => {};

  // postList

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CreateButton onClick={postData}>새로운 글 생성</CreateButton>
        {/* {postList} */}
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100vw;
  background-color: beige;
`;

const CreateButton = styled.button`
  font-size: 20px;
`;
