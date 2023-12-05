import React from "react";
import { styled } from "styled-components";
import { DataI } from "../interface";

interface CardI {
  props: DataI;
  size?: "s" | "m" | "l";
}

export default function Card({ props, size = "l" }: CardI) {
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
      fflex={size === "s" ? 0 : 1}>
      {icon && <img className="icon" src={icon} alt={icon}></img>}
      {size !== "s" && <div className="name">{name}</div>}
      {size === "l" && <div className="explain">{explain}</div>}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color: string; fflex: number }>`
  display: flex;
  padding: 0.8rem 1rem;
  flex-grow: ${(props) => props.fflex};
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
