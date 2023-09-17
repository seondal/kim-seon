import "./App.css";
import styled from "styled-components";
import { DATA } from "./data";
import Card from "./components/Card";
import React from "react";
import Profile from "./components/Profile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Wrapper>
      <Profile />
      <Container>
        {DATA.map(({ link, icon, name, explain }) => (
          <Card link={link} icon={icon} name={name} explain={explain} />
        ))}
      </Container>
      {/* <Card
          className="gmail"
          style={{ width: "55px" }}
          onClick={() => {
            var result = window.confirm("sseondal@gmail.com로 메일보내기");
            if (result) {
              window.open("mailto:sseondal@gmail.com");
            }
          }}>
          <img className="icon" src={gmail}></img>
        </Card> */}

      <a href="https://velog-readme-stats.vercel.app/api/redirect?name=seondal">
        <img src="https://velog-readme-stats.vercel.app/api?name=seondal" />
      </a>
      <a href="https://solved.ac/whkakrkr">
        <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr" />
      </a>
    </Wrapper>
  );
};

export default App;
