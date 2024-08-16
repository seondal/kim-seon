import "./App.css";

import ReactGA from "react-ga";
import { Analytics } from "@vercel/analytics/react";
import styled from "styled-components";
import { DATA } from "./data";
import Card from "./components/Card";
import React from "react";
import Profile from "./components/Profile";
import Velog from "./components/Velog";
import Solved from "./components/Solved";
import ENV from "./constants/env";

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
    justify-content: center;
  }

  .image {
    width: 100%;
  }
`;

ReactGA.initialize(ENV.ga, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

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
            <Card props={DATA.github} size="m" />
            <Card props={DATA.littly} size="m" />
            <Card props={DATA.posepicker} size="s" />
          </div>
          <div className="row">
            <Card props={DATA.insta} size="s" />
            <Card props={DATA.twitter} size="s" />
            <Card props={DATA.disquiet} size="s" />
            <Card props={DATA.gmail} size="m" isMail={true} />
          </div>
          {/* <div className="row">
            <Card props={DATA.littly} size="m" />
            <Card props={DATA.twitter} size="s" />
            <Card props={DATA.insta} size="s" />
            <Card props={DATA.gmail} size="s" isMail={true} />
            <Card props={DATA.posepicker} size="s" />
          </div> */}
          <Solved />
          {/* <Velog /> */}
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
