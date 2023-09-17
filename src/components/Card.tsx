import React from "react";
import { styled } from "styled-components";
import { DataI } from "../interface";

interface CardI {
  props: DataI;
  size?: "s" | "m" | "l";
  flex?: number;
}

export default function Card({ props, size = "l", flex = 1 }: CardI) {
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
    <Wrapper
      className="velog"
      onClick={onClick}
      color={color}
      fflex={size === "s" ? 0 : flex}>
      <img className="icon" src={icon} alt={icon}></img>
      {size !== "s" && <div className="name">{name}</div>}
      {size === "l" && <div className="explain">{explain}</div>}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color: string; fflex: number }>`
  display: flex;
  padding: 0.8rem 1rem;
  flex-grow: ${(props) => props.fflex};
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
