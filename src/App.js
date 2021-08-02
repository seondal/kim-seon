import "./App.css";
import styled from "styled-components";
import github from "./assets_v2/github.PNG";
import notion from "./assets_v2/notion.PNG";
import insta from "./assets_v2/instagram.PNG";
import velog from "./assets_v2/velog.PNG";
import tistory from "./assets_v2/tistory.PNG";
import profile from "./assets_v2/시무룩닭.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 50%;
  color: var(--font);

  .smaller {
    display: flex;
    flex-direction: row;
    gap: 10%;
  }

  .solved {
    width: 280px;
    :hover {
      box-shadow: white 0 2px 20px;
    }
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 20%;

  font-style: italic;
  text-decoration: none;
  color: var(--font);

  .profile {
    width: 100%;
    border-radius: 50%;
    box-shadow: white 0 2px 20px;
  }

  img {
    box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
    width: 80%;
    border-radius: 20%;
    margin-bottom: 3px;

    :hover {
      box-shadow: white 0 2px 20px;
    }
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Card>
        <img className="profile" src={profile}></img>
        <h3>Seondal</h3>
      </Card>
      <div className="smaller">
        <Card href="https://velog.io/@seondal">
          <img src={velog}></img>
          Velog
        </Card>
        <Card href="https://whkakrkr.tistory.com">
          <img src={tistory}></img>
          Tistory
        </Card>
      </div>

      <div className="smaller">
        <Card href="https://github.com/seondal">
          <img src={github}></img>
          GitHub
        </Card>
        <Card href="https://suave-lilac-075.notion.site/fd0c2a204d8e4fd7b193800c20d5eda0?v=fc4e5ae6e85a44b1988817215a63a854">
          <img src={notion}></img>
          Projects
        </Card>
        <Card href="https://www.instagram.com/dev_seondal/">
          <img src={insta}></img>
          Instagram
        </Card>
      </div>

      <a href="https://solved.ac/whkakrkr">
        <img
          className="solved"
          src="http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr"
        />
      </a>
    </Wrapper>
  );
};

export default App;
