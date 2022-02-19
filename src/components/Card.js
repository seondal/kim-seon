import react from "react";
import { useState } from "react";
import "./v4.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 270px;
  height: 55px;
  display: flex;
  margin-bottom: 15px;
  padding-right: 20px;
  padding-left: 20px;
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card);
  border-radius: 10px;
  color: white;

  .icon {
    width: 30px;
  }

  .name {
    font-size: 20px;
  }

  .explain {
    display: flex;
    flex-direction: column;
    font-size: 15px;
  }
`;

const Card = ({ contents }) => {
  const { link, icon, name, detail, color } = contents;
  const [isHover, setIsHover] = useState(0);

  return (
    <a
      href={link}
      style={{ textDecorationLine: "none" }}
      onMouseOver={() => setIsHover(1)}
      onMouseOut={() => setIsHover(0)}
    >
      <Wrapper style={isHover ? { backgroundColor: color } : {}}>
        <img className="icon" src={icon}></img>
        <div className="name">{name}</div>
        <div className="explain">{detail}</div>
      </Wrapper>
    </a>
  );
};

export default Card;
