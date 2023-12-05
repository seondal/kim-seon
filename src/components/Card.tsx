import React from "react";
import { styled } from "styled-components";
import { DataI } from "../interface";

interface CardI {
  props: DataI;
  size?: "s" | "m" | "l";
  isMail?: boolean;
}

export default function Card({ props, size = "l", isMail = false }: CardI) {
  const { name, icon, link, explain, color } = props;
  function onClick() {
    if (isMail) {
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
  gap: 1rem;
  justify-content: center;
  padding: 0.8rem;
  flex-grow: ${(props) => props.fflex};
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
