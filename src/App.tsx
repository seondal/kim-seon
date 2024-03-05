import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import styled from "styled-components";
import { DATA } from "./data";
import Card from "./components/Card";
import React from "react";
import Profile from "./components/Profile";
import Velog from "./components/Velog";
import Solved from "./components/Solved";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
  gap: 0.5rem;

  .row {
    display: flex;
    gap: 0.5rem;
  }

  .image {
    width: 100%;
  }
`;

const App = () => {
  return (
    <>
      <Analytics />
      <Wrapper>
        <Profile />
        <Container>
          <div className="row">
            <Card props={DATA.tistory} />
          </div>
          <div className="row">
            <Card props={DATA.velog} />
          </div>
          <div className="row">
            <Card props={DATA.notion} />
          </div>
          <div className="row">
            <Card props={DATA.github} size="l" />
            <Card props={DATA.projects} size="s" />
            <Card props={DATA.insta} size="s" />
            <Card props={DATA.twitter} size="s" />
            <Card props={DATA.toss} size="s" />
            <Card props={DATA.gmail} size="m" isMail={true} />
          </div>
          <Velog />
          <Solved />
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
