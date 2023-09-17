import { styled } from "styled-components";
import { ASSETS } from "../assets";

const Wrapper = styled.div`
  color: black;
  width: 100px;
  margin: auto;
  text-align: center;
  img {
    border-radius: 50%;
  }
`;

export default function Profile() {
  return (
    <Wrapper>
      <img src={ASSETS.profile} alt="🐤" />
      <h3>Seondal</h3>
    </Wrapper>
  );
}
