import "./v4.css";
import styled from "styled-components";
import profileImage from "../version3/assets_v3/시무룩닭.jpg";
import Card from "./Card";
import CardContents from "./CardContents.js";
import instaIcon from "../version3/assets_v3/instagram.png";
import gmailIcon from "../version3/assets_v3/gmail.png";

const MiniCards = styled.div``;

const v4 = () => {
  return (
    <>
      {CardContents.map((content) => (
        <Card contents={content} />
      ))}
      <MiniCards>
        <Card
          contents={{
            link: "https://www.instagram.com/dev_seondal/",
            icon: instaIcon,
            name: "",
            detail: "개발일기 공스타",
            color: "#e4405f",
          }}
          style={{
            width: "180px",
          }}
        />
        <Card
          contents={{
            link: "",
            icon: gmailIcon,
            name: "",
            detail: "",
            color: "#d14836",
          }}
        />
      </MiniCards>
      <a href="https://solved.ac/whkakrkr">
        <img
          className="solved"
          src="http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr"
          style={{ width: "310px" }}
        />
      </a>
    </>
  );
};

export default v4;
