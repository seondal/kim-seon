import "./App.css";
import styled from "styled-components";
import { DATA } from "./data";
import Card from "./components/Card";
import React from "react";
import Profile from "./components/Profile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  .image {
    width: 100%;
  }
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
        <Card props={DATA.gmail} size="s" />
        <Card props={DATA.github} size="s" />
        <Card props={DATA.toss} size="m" />
        {/* <Card props={DATA.projects} size="m" /> */}
        <a href="https://velog-readme-stats.vercel.app/api/redirect?name=seondal">
          <img
            className="image"
            src="https://velog-readme-stats.vercel.app/api?name=seondal"
            alt=""
          />
        </a>
        <a href="https://solved.ac/whkakrkr">
          <img
            className="image"
            src="http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr"
            alt=""
          />
        </a>
      </Container>
    </Wrapper>
  );
};

export default App;
