import styled from "styled-components";
import Card from "./Card";
import velogIcon from "../version3/assets_v3/velog.png";

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
