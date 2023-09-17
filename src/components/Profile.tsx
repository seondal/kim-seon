import { styled } from "styled-components";
import { ASSETS } from "../assets";

const Wrapper = styled.div`
  color: black;
  text-align: center;
  img {
    width: 100px;
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
