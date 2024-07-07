import { FC } from "react";
import HeroHeader from "./HeroHeader/HeroHeader";
import HeroDesc from "./HeroDesc/HeroDesc";
import InfoNumbers from "./InfoNumbers/InfoNumbers";
import HeroLink from "./HeroLink/HeroLink";
import AboutLoad from "./AboutLoad/AboutLoad";
import Users from "./Users/Users";

const Main: FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <HeroHeader />
          <HeroDesc />
          <InfoNumbers />
          <HeroLink />
          <AboutLoad />
          <Users />
        </div>
      </section>
    </main>
  );
};

export default Main;
