import "./App.css";
import styled from "styled-components";
import profile from "./assets_v1/profile/시무룩닭.jpg";
import winsta from "./assets_v1/instagram-white.png";
import binsta from "./assets_v1/instagram-black.png";
import wgithub from "./assets_v1/github_white.png";
import bgithub from "./assets_v1/github_black.png";
import bt from "./assets_v1/tistory_black.png";
import wt from "./assets_v1/tistory_white.png";
import bnotion from "./assets_v1/notion_black.svg";
import wnotion from "./assets_v1/notion_white.png";
import bv from "./assets_v1/velog_black.png";
import wv from "./assets_v1/velog_white.png";

//const body=document.querySelector("body"); //call body tags
//const photoNum=3; //num of photo;
// var card;
// var ranNum;
// function callRan(){
// ranNum=Math.floor(Math.random()*3); //call number 1 to 3
// return ranNum
// }
// function callPho(){
// ranNum=callRan();
// card="#5aa897";
// }
// function init(){
// callPho();
// }

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font: var(--basicfont);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-top: 100px;
  img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background: url(${profile});
    background-size: 100%;
  }
`;

const Card = styled.a`
  display: flex;
  justify-content: center;
  background-color: var(--card);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 100%;
  text-decoration: none;
  color: var(--basicfont);
  :hover {
    background-color: var(--point);
    color: var(--font);
    text-decoration: none;
  }
  div {
    width: 20px;
    height: 20px;
    background-size: 100%;
  }
  .insta {
    background: url(${binsta});
    background-size: 100%;
  }
  :hover {
    .insta {
      background: url(${winsta});
      background-size: 100%;
    }
  }
  .github {
    background: url(${bgithub});
    background-size: 100%;
  }
  :hover {
    .github {
      background: url(${wgithub});
      background-size: 100%;
    }
  }
  .t {
    background: url(${bt});
    background-size: 100%;
  }
  :hover {
    .t {
      background: url(${wt});
      background-size: 100%;
    }
  }
  .notion {
    background: url(${bnotion});
    background-size: 100%;
  }
  :hover {
    .notion {
      background: url(${wnotion});
      background-size: 100%;
    }
  }
  .v {
    background: url(${bv});
    background-size: 100%;
  }
  :hover {
    .v {
      background: url(${wv});
      background-size: 100%;
    }
  }
`;

function App() {
  //init();
  return (
    <Wrapper>
      <Profile>
        <img src={profile}></img>
        <h3 style={{ color: "var(--basicfont)" }}>SeonDal</h3>
      </Profile>

      <Card href="https://velog.io/@seondal">
        <div class="v"></div> &nbsp; Velog &nbsp; | &nbsp; 코딩일기
      </Card>

      <Card href="https://whkakrkr.tistory.com">
        <div class="t"></div> &nbsp; Tistory &nbsp; | &nbsp; 공부기록
      </Card>

      <Card href="https://github.com/seondal">
        <div class="github"></div> &nbsp; GitHub &nbsp; | &nbsp; 프로젝트
      </Card>

      <Card href="https://suave-lilac-075.notion.site/fd0c2a204d8e4fd7b193800c20d5eda0?v=fc4e5ae6e85a44b1988817215a63a854">
        <div class="notion"></div> &nbsp; Project &nbsp; | &nbsp; 개발기록
      </Card>

      {/* <Card href="https://www.instagram.com/dev_seondal/">
        <div class="insta"></div> &nbsp; @dev_seondal
      </Card> */}
    </Wrapper>
  );
}

export default App;
