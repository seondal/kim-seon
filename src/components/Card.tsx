import React from "react";
import { styled } from "styled-components";
import { DataI } from "../interface";

interface Card {
  props: DataI;
}

export default function Card({ props }: Card) {
  const { name, icon, link, explain, color } = props;

  function onClick() {
    if (name === "Mail") {
      let result = window.confirm("sseondal@gmail.com로 메일보내기");
      if (result) {
        window.open("mailto:sseondal@gmail.com");
      }
      return;
    }
    window.open(link);
  }
  return (
    <Wrapper className="velog" onClick={onClick} color={color}>
      <img className="icon" src={icon} alt={icon}></img>
      <div className="name">{name}</div>
      <div className="explain">{explain}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color: string }>`
  display: flex;
  padding: 0.8rem 1rem;
  gap: 0.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--card);
  border-radius: 10px;
  color: white;
  cursor: pointer;

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

  &:hover {
    background-color: ${(props) => props.color};
  }
`;
