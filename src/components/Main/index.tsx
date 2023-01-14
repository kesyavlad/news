import React, { FC } from "react";
import CardNews from "../Card";

interface mainProp {
  data: Array<any>; //уточнить
}
const Main: FC<mainProp> = ({ data }) => {
  return (
    <div>
      {data.map((element) => (
        <CardNews
          key={element.id}
          id={element.id}
          imageUrl={element.imageUrl}
          publishedAt={element.publishedAt}
          title={element.title}
          summary={element.summary}
        />
      ))}
    </div>
  );
};

export default Main;
