import { FC } from "react";
import "./HeroHeader.scss";
import ColorText from "../ColorText/ColorText";
const HeroHeader: FC = () => {
  return (
    <h1 className="hero_heading">
      Do you want to Learn more About cryptocurrencies
      <ColorText></ColorText>
    </h1>
  );
};

export default HeroHeader;
