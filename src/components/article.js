import backupImg from "../assets/backupimg.png";

export const Article = (props) => {
  const getSentimentInfo = (score) => {
    if (score > 0.2) {
      return {
        sentiment: "Positive",
        textColor: "text-green-500",
        opacity: `${Math.min(score, 1) * 100}%`,
      };
    } else if (score < -0.2) {
      return {
        sentiment: "Negative",
        textColor: "text-red-500",
        opacity: `${Math.min(Math.abs(score), 1) * 100}%`,
      };
    } else {
      return { sentiment: "Neutral", textColor: "text-white", opacity: "100%" };
    }
  };

  const { sentiment, textColor, opacity } = getSentimentInfo(props.score);

  return (
    <div className="w-96 h-[31.25rem] p-1.5 flex flex-col text-white gap-5 border border-slate-400 rounded-sm">
      <div
        className="bg-cover bg-center h-96 rounded-sm"
        style={{ backgroundImage: props.img_url ? `url(${props.img_url})` : `url(${backupImg})` }}></div>
      <div className="flex justify-between align-center">
        <p>{props.published_at}</p>
        <div className={`text-lg font-bold ${textColor}`} style={{ opacity }}>
          {sentiment}
        </div>
      </div>
      <div className="flex flex-col justify-around  gap-2">
        <h2 className="font-bold">{props.headline}</h2>
        <p className="font-light text-sm">{props.desc}</p>
      </div>
      <div className="flex justify-between align-center">
        <p className="py-1">{props.source}</p>
        <a href={props.url} className="py-1 px-4 rounded-sm bg-white text-black">Read More</a>
      </div>
    </div>
  );

};
