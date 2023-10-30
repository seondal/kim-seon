import { styled } from "styled-components";
import { ASSETS } from "../assets";

const Wrapper = styled.div`
  color: black;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 20%;
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
