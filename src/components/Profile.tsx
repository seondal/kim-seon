import { styled } from "styled-components";
import { ASSETS } from "../assets";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  img {
    width: 40%;
    border-radius: 50%;
  }
`;

export default function Profile() {
  return (
    <Wrapper>
      <img src={ASSETS.profile}></img>
      <h3>Seondal</h3>
    </Wrapper>
  );
}
