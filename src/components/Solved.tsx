const Mazza = "http://mazassumnida.wtf/api/v2/generate_badge?boj=whkakrkr";
const White =
  "https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=whkakrkr";
const Zandi = "http://mazandi.herokuapp.com/api?handle=whkakrkr&theme=warm";

export default function Solved() {
  return (
    <a href="https://solved.ac/whkakrkr">
      <img className="image" src={White} alt="" />
      <img className="image" src={Zandi} alt="" />
    </a>
  );
}
