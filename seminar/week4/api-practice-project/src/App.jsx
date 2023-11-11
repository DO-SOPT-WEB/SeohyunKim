import styled from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import axios from "axios";

import { useState } from "react";
import Post from "./components/Post";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  // GET
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data.data);
    };
    fetchData();
  }, []);

  // POST
  const postData = () => {
    try {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "제목",
        body: " 바디바디",
        userId: 1,
      });
      console.log("성공");
    } catch (err) {
      console.log(err);
    }
  };

  // postList
  const postList = data ? (
    data.map((item) => {
      return <Post title={item.title} body={item.body} key={item.id} />;
    })
  ) : (
    <p>Loading . . . </p>
  );

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CreateButton onClick={postData}>새로운 글 생성</CreateButton>
        {postList}
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
