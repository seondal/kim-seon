import "./v3.css";
import styled from "styled-components";
import notion from "./assets_v3/notion.png";
import insta from "./assets_v3/instagram.png";
import velog from "./assets_v3/velog.png";
import tistory from "./assets_v3/tistory.png";
import profile from "./assets_v3/걸어가는아차모.gif";
import gmail from "./assets_v3/gmail.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30%;
  color: var(--font);

  .smaller {
    display: flex;
    flex-direction: row;
  }

  .solved {
    width: 280px;
    margin: 10px;
  }

  .velog {
    :hover {
      background-color: #1ec592;
    }
  }
  .tistory {
    :hover {
      background-color: #e5511e;
    }
  }
  .notion {
    :hover {
      background-color: black;
    }
  }
  .insta {
    :hover {
      background-color: #e4405f;
    }
  }
  .gmail {
    :hover {
      background-color: #d14836;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  img {
    width: 50%;
    border-radius: 50%;
  }
`;

const Card = styled.a`
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

const v3 = () => {
  return (
    <Wrapper>
      <Profile>
        <img src={profile}></img>
        <h3>Seondal</h3>
      </Profile>
      <Card className="velog" href="https://velog.io/@seondal">
        <img className="icon" src={velog}></img>
        <div className="name">Seondal.log</div>
        <div className="explain">개발블로그</div>
      </Card>
      <Card className="tistory" href="https://whkakrkr.tistory.com">
        <img className="icon" src={tistory}></img>
        <div className="name">Seondalgorithm</div>
        <div className="explain">문제풀이</div>
      </Card>

      <div className="smaller">
        <Card
          className="notion"
          style={{ width: "130px", gap: "5%" }}
          href="https://suave-lilac-075.notion.site/Dalchive-ec0bc59746804968a085c2cf46151c80"
        >
          <img className="icon" src={notion}></img>
          <div className="name"> Dalchive</div>
        </Card>

        <Card
          className="insta"
          style={{ width: "55px" }}
          href="https://www.instagram.com/dev_seondal/"
        >
          <img className="icon" src={insta}></img>
        </Card>
        <Card
          className="gmail"
          style={{ width: "55px" }}
          onClick={() => {
            var result = window.confirm("sseondal@gmail.com로 메일보내기");
            if (result) {
              window.open("mailto:sseondal@gmail.com");
            }
          }}
        >
          <img className="icon" src={gmail}></img>
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

export default v3;
