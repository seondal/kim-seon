const LINK = "name=seondal&tag=인생네컷";

export default function Velog() {
  return (
    <a href={`https://velog-readme-stats.vercel.app/api/redirect?${LINK}`}>
      <img
        className="image"
        src={`https://velog-readme-stats.vercel.app/api?${LINK}`}
        alt=""
      />
    </a>
  );
}
