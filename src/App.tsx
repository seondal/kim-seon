import "./App.css";
import styled from "styled-components";
import { DATA } from "./data";
import Card from "./components/Card";
import React from "react";
import Profile from "./components/Profile";

const Wrapper = styled.div`
  padding: 20px;
  width: 400px;
  box-sizing: border-box;
  border: 1px solid grey;

  img {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const App = () => {
  return (
    <Wrapper>
      <Profile />
      <Container>
        {DATA.map((props) => (
          <Card props={props} key={props.name} />
        ))}
        <a href="https://velog-readme-stats.vercel.app/api/redirect?name=seondal">
          <img
            src="https://velog-readme-stats.vercel.app/api?name=seondal"
            alt=""
          />
        </a>
        <a href="https://solved.ac/whkakrkr">
          <img
            src="http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr"
            alt=""
          />
        </a>
      </Container>
    </Wrapper>
  );
};

export default App;
