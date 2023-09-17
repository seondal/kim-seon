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
        <Card props={DATA.velog} />
        <Card props={DATA.tistory} />
        <Card props={DATA.notion} />
        <Card props={DATA.insta} size="s" />
        <Card props={DATA.github} size="s" />
        <Card props={DATA.gmail} size="s" />
        <Card props={DATA.toss} size="m" />

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
