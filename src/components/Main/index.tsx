import React, { FC } from "react";
import CardNews from "../Card";
import { Grid } from "@mui/material";
import "./mainStyle.scss";

interface mainProp {
  data: Array<any>; //уточнить
}
const Main: FC<mainProp> = ({ data }) => {
  return (
    <div>
      <p className="paragraphResult">Result: {data.length}</p>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((element) => (
          <Grid item xs={2} sm={4} md={4} key={element.id} spacing={2}>
            <CardNews
              key={element.id}
              id={element.id}
              imageUrl={element.imageUrl}
              publishedAt={element.publishedAt}
              title={element.title}
              summary={element.summary}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
