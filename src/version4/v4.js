import styled from "styled-components";
import Card from "./Card";
import profileImage from "../version3/assets_v3/시무룩닭.jpg";
import velogIcon from "../version3/assets_v3/velog.png";
import tistoryIcon from "../version3/assets_v3/tistory.png";
import notionIcon from "../version3/assets_v3/notion.png";
import instaIcon from "../version3/assets_v3/instagram.png";
import gmailIcon from "../version3/assets_v3/gmail.png";

const CardContents = [
  {
    link: "https://velog.io/@seondal",
    icon: velogIcon,
    name: "seondal.log",
    detail: "개발블로그",
    color: "#1ec592",
  },
  {
    link: "https://velog.io/@seondal",
    icon: velogIcon,
    name: "seondal.log",
    detail: "개발블로그",
    color: "#1ec592",
  },
];

const v4 = () => {
  return (
    <>
      {CardContents.map((content) => (
        <Card contents={content} />
      ))}
    </>
  );
};

export default v4;
