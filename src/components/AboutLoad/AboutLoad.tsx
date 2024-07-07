import { FC } from "react";
import { LoadData } from "../../data/loadData";
import "./AboutLoad.scss";
const AboutLoad: FC = () => {
  return (
    <div className="about_links flex">
      {LoadData?.map((load) => (
        <a
          key={load.title}
          target="_blank"
          href="https://play.google.com/"
          className="link flex"
        >
          <img src={load.img} alt={load.title} className="link-img" />
          <div className="link-group">
            <p className="link-desc">{load.desc}</p>
            <b className="link-title">{load.title}</b>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AboutLoad;
