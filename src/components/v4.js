import "./v4.css";
import styled from "styled-components";
import profileImage from "../version3/assets_v3/시무룩닭.jpg";
import Card from "./Card";
import CardContents from "./CardContents.js";

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
