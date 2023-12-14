import { styled } from "styled-components";
import { ASSETS } from "../assets";

const Wrapper = styled.div`
  color: black;
  text-align: center;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 40%;
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
