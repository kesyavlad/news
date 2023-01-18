import React, { FC, useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import "./styleLink.scss";
import HightLight from "../HightLight";
import uuid from "react-uuid";

interface cardInterface {
  id: number;
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
  input: string;
}
const CardNews: FC<cardInterface> = ({
  id,
  imageUrl,
  publishedAt,
  title,
  summary,
  input,
}) => {
  const date = new Date(Date.parse(publishedAt));
  const light = useCallback(
    (str: string) => {
      return <HightLight inputFilter={input} str={str} />;
    },
    [input]
  );
  let ending = "";
  let month = "";

  const searchMonth = () => {
    switch (date.getMonth()) {
      case 0:
        return (month = "January");
      case 1:
        return (month = "February");
      case 2:
        return (month = "March");
      case 3:
        return (month = "April");
      case 4:
        return (month = "May");
      case 5:
        return (month = "June");
      case 6:
        return (month = "July");
      case 7:
        return (month = "August");
      case 8:
        return (month = "September");
      case 9:
        return (month = "October");
      case 10:
        return (month = "November");
      case 11:
        return (month = "December");
    }
  };
  const endingAdd = () => {
    switch (date.getDate()) {
      case 1:
        return (ending = "st");
      case 2:
        return (ending = "nd");
      case 3:
        return (ending = "rd");
      default:
        return (ending = "th");
    }
  };
  const limitText = (text: string) => {
    if (text.length > 100) {
      const result = text.split("");
      const newText = result.splice(0, 99);
      return newText.join("") + "...";
    }
    return text;
  };
  endingAdd();
  searchMonth();

  const result = `${month} ${date.getDate()}${ending}, ${date.getFullYear()}`;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#363636",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 400, minHeight: 530 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="217"
            width="400"
            image={imageUrl}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ paddingBottom: "24px" }}
            >
              {result}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {light(limitText(title))}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {light(limitText(summary))}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              sx={{ textTransform: "none", fontSize: "16px" }}
            >
              <Link to={`/${id}`} className="link">
                Read more
              </Link>
              <EastIcon fontSize="small" />
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default CardNews;
