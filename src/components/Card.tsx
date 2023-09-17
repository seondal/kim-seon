import React from "react";
import { styled } from "styled-components";
import { CardI } from "../interface";

export default function Card({ link, icon, name, explain }: CardI) {
  return (
    <Wrapper className="velog" href={link}>
      <img className="icon" src={icon}></img>
      <div className="name">{name}</div>
      <div className="explain">{explain}</div>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  margin: 10px;
  display: flex;
  gap: 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--card);
  width: 280px;
  height: 55px;
  border-radius: 10px;
  color: white;
  text-decoration: none;

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
