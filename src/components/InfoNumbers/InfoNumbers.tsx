import { FC } from "react";
import { DataNumbers } from "../../data/InfoNumbers";
import "./InfoNumbers.scss";
const InfoNumbers: FC = () => {
  return (
    <div className="data flex" aria-label="Информация">
      {DataNumbers?.map((data) => (
        <div key={data.info} className="data_item flex">
          <strong className="data_item-data">{data.data}</strong>
          <span className="data_item-info">{data.info}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoNumbers;
